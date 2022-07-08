#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
    int i, j;
    int n_rows, n_cols;

    if(argc != 3){
        fprintf(stderr, "エラー: 引数が正しく入力されていません。\n");
        return EXIT_FAILURE;
    }
    n_rows = (int)strtol(argv[1], NULL, 10);
    n_cols = (int)strtol(argv[2], NULL, 10);

    int **matrix = (int**)malloc(sizeof(int*) * n_rows);

    if(matrix == NULL){
        fprintf(stderr, "エラー: メモリが確保出来ません。\n");
        return EXIT_FAILURE;
    }

    for(i = 0; i < n_rows; i++){
        matrix[i] = (int*)malloc(sizeof(int) * n_cols);
        if(matrix[i] == NULL){
            fprintf(stderr, "エラー: メモリが確保出来ません。\n");
            exit(EXIT_FAILURE);
        }
    }

    /* 行列に値を入れていく */
    for(i = 0; i < n_rows; i++)
        for(j = 0; j < n_cols; j++)
            matrix[i][j] = i * n_cols + j + 1;

    /* 行列の中を表示 */
    for(i = 0; i < n_rows; i++){
        for(j = 0; j < n_cols; j++)
            printf("%4d  ", matrix[i][j]);
        putchar('\n');
    }

    for(i = 0; i < n_rows; i++){
        free(matrix[i]);
    }
    free(matrix);

    return 0;
}
