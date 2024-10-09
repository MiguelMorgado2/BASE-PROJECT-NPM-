:: environment tag
set env=%1
:: cucumber tag
set tag=%2

:: Set the COMMON_CONFIG_FILE variable to point to the common environment configuration file
set COMMON_CONFIG_FILE=env/common.env
set NODE_ENV=%env%

:: run cucumber tests & on failure run postcucumber
npm run cucumber:%env% -- --profile %tag% & npm run postcucumber