//
// Created by Congb19 on 2019/10/22.
//

#include<iostream>
#include<cstdio>
#include<windows.h>
#include <stdlib.h>
#include <unistd.h>
int main() {
    STARTUPINFO si;
    memset(&si,0,sizeof(si));
    si.cb=sizeof(si);
    si.dwFlags=STARTF_USESHOWWINDOW;
    si.wShowWindow=TRUE;

    PROCESS_INFORMATION pi;

    char szApplicationName[N]=TEXT("c:\\windows\\system32\\mspaint.exe");//通过地址调用进程
    char szCommandLine[N]="mspaint";//通过命令行调用进程

    BOOL bRet=CreateProcess(szApplicationName,NULL,NULL,NULL,FALSE,CREATE_NEW_CONSOLE,NULL,NULL,&si,&pi);
    int nError=GetLastError();


    return 0;
}