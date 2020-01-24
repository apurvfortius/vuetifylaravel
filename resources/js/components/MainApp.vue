<template>
    <v-app id="admin">
        <Header></Header>

        <v-content>
            <v-container grid-list-xs>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

export default {
    name: 'main-app',
    props: {
        source: String,
    }
}
</script>

<style>
.theme--dark.v-application {
    background-image: url(/images/1.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: #fff;
}

.theme--dark.v-navigation-drawer {
    background-color: rgba(66, 66, 66, 0.6);
}

.theme--dark.v-card {
    background-color: rgba(66, 66, 66, .5);
    color: #fff;
}

.theme--dark.v-data-table {
    background-color: rgba(66, 66, 66, .5);
    color: #fff;
}
</style>
