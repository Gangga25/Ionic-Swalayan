<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Login</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-card-header>
                    <ion-card-title class="text-center">Login</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-input label="Email" label-placement="floating" fill="solid" placeholder="Masukan Email"></ion-input>
                    <ion-input label="Password" label-placement="floating" fill="solid" placeholder="Masukan Password"></ion-input>

                    <div class="text-center">
                        <ion-button>Masuk</ion-button>
                    </div>
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
</script>
