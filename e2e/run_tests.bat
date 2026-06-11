:: Usage: .\run_tests.bat <ENV> <TAG> <MARKET> [TESTNAME]
:: Example: .\run_tests.bat QAS smoke PT
:: Example: .\run_tests.bat PRD regression GB "My scenario name"

:: arguments
set env=%1
set tag=%2
set market=%3
set testname=%4

:: validate arguments
if "%env%"=="" (
    echo ERROR: Missing ENV argument. Usage: run_tests.bat ^<ENV^> ^<TAG^> ^<MARKET^> [TESTNAME]
    echo Valid environments: DEV, QAS, PRD
    exit /b 1
)
if "%tag%"=="" (
    echo ERROR: Missing TAG argument. Usage: run_tests.bat ^<ENV^> ^<TAG^> ^<MARKET^> [TESTNAME]
    echo Valid tags: dev, smoke, regression
    exit /b 1
)
if "%market%"=="" (
    echo ERROR: Missing MARKET argument. Usage: run_tests.bat ^<ENV^> ^<TAG^> ^<MARKET^> [TESTNAME]
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
echo  Tag         : %tag%
if not "%testname%"=="" echo  Test        : %testname%
echo ========================================
echo.

:: run cucumber tests and postcucumber
if "%testname%"=="" (
    npm run cucumber:%env% -- --profile %tag% & npm run postcucumber
) else (
    npm run cucumber:%env% -- --profile %tag% --name "%testname%" & npm run postcucumber
)
