#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
    void *data;
    int length;
    size_t size;
    char type[16];
} Vector;

void initVector(Vector *vec, char *type, int length){
    if(strcmp(type, "float") == 0){
        vec->size = sizeof(float);
    }else if(strcmp(type, "double") == 0){
        vec->size = sizeof(double);
    }else if(strcmp(type, "int") == 0){
        vec->size = sizeof(int);
    }else if(strcmp(type, "long") == 0){
        vec->size = sizeof(long);
    }else{
        exit(EXIT_FAILURE);
    }
    vec->data = malloc(vec->size * length);
    vec->length = length;
    strcpy(vec->type, type);
}

void freeVector(Vector vec){
    free(vec.data);
}

void inspectVector(Vector vec){
    char tmp[16];
    char *txt = malloc(16 * vec.length);
    txt[0] = '[';
    int i;

    if(strcmp(vec.type, "float") == 0)
        for(i = 0; i < vec.length; i++){
            sprintf(tmp, "%f, ", ((float*)vec.data)[i]);
            strcat(txt, tmp);
        }
    else if(strcmp(vec.type, "double") == 0)
        for(i = 0; i < vec.length; i++){
            sprintf(tmp, "%lf, ", ((double*)vec.data)[i]);
            strcat(txt, tmp);
        }
    else if(strcmp(vec.type, "int") == 0)
        for(i = 0; i < vec.length; i++){
            sprintf(tmp, "%d, ", ((int*)vec.data)[i]);
            strcat(txt, tmp);
        }
    else if(strcmp(vec.type, "long") == 0)
        for(i = 0; i < vec.length; i++){
            sprintf(tmp, "%ld, ", ((long*)vec.data)[i]);
            strcat(txt, tmp);
        }
    else
        exit(EXIT_FAILURE);

    txt[strlen(txt) - 2] = ']';
    txt[strlen(txt) - 1] = '\0';
    puts(txt);
    free(txt);
}

typedef struct{
    void *data;
    void **at;
    int row_size;
    int col_size;
    int length;
    size_t size;
    char type[16];
} Matrix;

void initMatrix(Matrix *mat, char *type, int row_size, int col_size){
    int i;
    size_t psize;

    if(strcmp(type, "float") == 0){
        mat->size = sizeof(float);
        psize = sizeof(float*);
    }else if(strcmp(type, "double") == 0){
        mat->size = sizeof(double);
        psize = sizeof(double*);
    }else if(strcmp(type, "int") == 0){
        mat->size = sizeof(int);
        psize = sizeof(int*);
    }else if(strcmp(type, "long") == 0){
        mat->size = sizeof(long);
        psize = sizeof(long*);
    }else{
        exit(EXIT_FAILURE);
    }

    mat->at = malloc(psize * row_size);
    if(strcmp(type, "float") == 0){
        mat->data = malloc(sizeof(float) * col_size * row_size);
        for(i = 0; i < row_size; i++){
            mat->at[i] = &(((float*)mat->data)[col_size * i]);
        }
    }else if(strcmp(type, "double") == 0){
        mat->data = malloc(sizeof(double) * col_size * row_size);
        for(i = 0; i < row_size; i++){
            mat->at[i] = &(((float*)mat->data)[col_size * i]);
        }
    }else if(strcmp(type, "int") == 0){
        mat->data = malloc(sizeof(int) * col_size * row_size);
        for(i = 0; i < row_size; i++){
            mat->at[i] = &(((float*)mat->data)[col_size * i]);
        }
    }else if(strcmp(type, "long") == 0){
        mat->data = malloc(sizeof(long) * col_size * row_size);
        for(i = 0; i < row_size; i++){
            mat->at[i] = &(((float*)mat->data)[col_size * i]);
        }
    }else{
        exit(EXIT_FAILURE);
    }
    mat->length = row_size * col_size;
    mat->row_size = row_size;
    mat->col_size = col_size;
    strcpy(mat->type, type);
}

void freeMatrix(Matrix mat){
    free(mat.data);
    free(mat.at);
}

void inspectMatrix(Matrix mat){
    char tmp[16];
    char *txt = malloc(16 * mat.length);
    txt[0] = '[';
    int i, j;
    if(strcmp(mat.type, "float") == 0){
        for(i = 0; i < mat.row_size; i++){
            strcat(txt, "[");
            for(j = 0; j < mat.col_size; j++){
                sprintf(tmp, "%f, ", ((float**)mat.at)[i][j]);
                strcat(txt, tmp);
            }
            txt[strlen(txt) - 2] = '\0';
            strcat(txt, "], ");
        }
    }else if(strcmp(mat.type, "double") == 0){
        for(i = 0; i < mat.row_size; i++){
            strcat(txt, "[");
            for(j = 0; j < mat.col_size; j++){
                sprintf(tmp, "%lf, ", ((double**)mat.at)[i][j]);
                strcat(txt, tmp);
            }
            txt[strlen(txt) - 2] = '\0';
            strcat(txt, "], ");
        }
    }else if(strcmp(mat.type, "int") == 0){
        for(i = 0; i < mat.row_size; i++){
            strcat(txt, "[");
            for(j = 0; j < mat.col_size; j++){
                sprintf(tmp, "%d, ", ((int**)mat.at)[i][j]);
                strcat(txt, tmp);
            }
            txt[strlen(txt) - 2] = '\0';
            strcat(txt, "], ");
        }
    }else if(strcmp(mat.type, "long") == 0){
        for(i = 0; i < mat.row_size; i++){
            strcat(txt, "[");
            for(j = 0; j < mat.col_size; j++){
                sprintf(tmp, "%ld, ", ((long**)mat.at)[i][j]);
                strcat(txt, tmp);
            }
            txt[strlen(txt) - 2] = '\0';
            strcat(txt, "], ");
        }
    }else{
        exit(EXIT_FAILURE);
    }
    txt[strlen(txt) - 2] = '\0';
    strcat(txt, "]");
    puts(txt);
    free(txt);
}

void verboseMatrix(Matrix mat){
    printf("ROW SIZE: %d\n", mat.row_size);
    printf("COLUMN SIZE: %d\n", mat.col_size);
    printf("LENGTH: %d\n", mat.length);
    printf("TYPE: %s\n", mat.type);
}

int main(void){
    FILE *fp;

    // Vector vec;
    // initVector(&vec, "long", 10);
    // printVector(vec);
    // freeVector(vec);

    Matrix mat;
    initMatrix(&mat, "float", 10, 100);
    inspectMatrix(mat);
    // verboseMatrix(mat);
    freeMatrix(mat);
    // printVector(vec);
    // freeVector(vec);


    // printf("%ld\n", sizeof(long*));

    // Matrix mat;
    // initMatrix(&mat, "double", 10, 20);

    char file[] = "data.bin";

    // if((fp = fopen(file, "wb")) == NULL){
    //     fprintf(stderr, "ファイル %s を開けません。", file);
    //     return EXIT_FAILURE;
    // }

    // fwrite(v.data, sizeof(float), v.size, fp);
    // fclose(fp);

    return 0;
}