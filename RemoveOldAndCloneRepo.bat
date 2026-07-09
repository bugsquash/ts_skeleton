@echo off
setlocal
set REPO_URL=https://github.com/bugsquash/ts_skeleton.git
set REPO_DIR=c:/temp/marsrover/

if exist "%REPO_DIR%\.git" (
    echo Existing Git repository found. Deleting...
    rmdir /s /q "%REPO_DIR%"
)

git clone "%REPO_URL%" "%REPO_DIR%"
endlocal