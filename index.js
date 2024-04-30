#include <stdio.h>

void tri_insertion(int arr[], int taille) {
    int i, j, valeur_a_inserer;
    for (i = 1; i < taille; i++) {
        valeur_a_inserer = arr[i];
        j = i - 1;
        
        // Déplacer les éléments du tableau trié plus grands que la valeur à insérer
        // vers la droite pour faire de la place pour l'élément à insérer
        while (j >= 0 && arr[j] > valeur_a_inserer) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        // Insérer l'élément à sa position correcte dans le tableau trié
        arr[j + 1] = valeur_a_inserer;
    }
}

int main() {
    int tableau[] = {12, 11, 13, 5, 6};
    int taille = sizeof(tableau) / sizeof(tableau[0]);
    tri_insertion(tableau, taille);
    
    printf("Tableau trié par insertion: ");
    for (int i = 0; i < taille; i++) {
        printf("%d ", tableau[i]);
    }
    printf("\n");
    
    return 0;
}
