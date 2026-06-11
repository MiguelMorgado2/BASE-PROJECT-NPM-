@echo off
:: Usage: .\run_tests.bat <ENV> <MARKET> [TAG] [TEST_FILE]
:: Example: .\run_tests.bat QAS PT
:: Example: .\run_tests.bat QAS PT @smoke
:: Example: .\run_tests.bat PRD GB @regression src/tests/login.spec.ts

:: arguments
set env=%1
set market=%2
set tag=%3
set testfile=%4

:: validate arguments
if "%env%"=="" (
    echo ERROR: Missing ENV argument.
    echo Usage: run_tests.bat ^<ENV^> ^<MARKET^> [TAG] [TEST_FILE]
    echo Valid environments: DEV, QAS, PRD
    exit /b 1
)
if "%market%"=="" (
    echo ERROR: Missing MARKET argument.
    echo Usage: run_tests.bat ^<ENV^> ^<MARKET^> [TAG] [TEST_FILE]
    echo Valid markets: PT, GB, DE
    exit /b 1
)

:: set environment variables
set COMMON_CONFIG_FILE=env/common.env
set NODE_ENV=%env%
set MARKET=%market%

echo.
echo ========================================
echo  Environment : %env%
echo  Market      : %market%
if not "%tag%"==""      echo  Tag         : %tag%
if not "%testfile%"=="" echo  Test file   : %testfile%
echo ========================================
echo.

:: build the command
set CMD=npx cross-env COMMON_CONFIG_FILE=env/common.env NODE_ENV=%env% MARKET=%market% playwright test

if not "%testfile%"=="" set CMD=%CMD% %testfile%
if not "%tag%"==""      set CMD=%CMD% --grep "%tag%"

%CMD%
