#include <stdio.h>
#include <string.h>

#define MAX_STR 10000
#define LEN_NUM 50

void disp_svec(float *X, int n){
    char str[MAX_STR] = {};
    char tmp[LEN_NUM] = {};
    int i;
    for(i = 0; i < n; i++){
        sprintf(tmp, "%8.2f ", X[i]);
        strcat(str, tmp);
    }
    puts(str);
}

void disp_smat(float *X, int M, int N){
    char str[MAX_STR] = {};
    char tmp[LEN_NUM] = {};
    int i, j;

    for(i = 0; i < M; i++){
        for(j = 0; j < N; j++){
            sprintf(tmp, "%8.2f ", X[i * N + j]);
            strcat(str, tmp);
        }
        strcat(str, "\n");
    }
    printf("%s", str);
}
