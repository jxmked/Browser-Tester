<script setup lang="ts">
    import Cross from "./icons/cross.vue";
    import Check from "./icons/check.vue";
    
    defineProps<{
        title: string,
        value:string|boolean
    }>();

</script>

<template>
    <li v-if="value == 'true' || value == 'false'">
        <span class="item icons">
        
        <Check v-if="value == 'true'"/>
        <Cross v-else/>

        </span>
        <p>{{title}}</p>
    </li>
    <li v-else>
        <p>{{title}} - <span class="response-result">{{value}}</span></p>
    </li>
</template>

<style scoped>

    .container > .panel ul > li {
        padding: 0;
        margin-bottom: .7rem;
        font-family: "Montserrat","Sans-Serif";
        font-weight: 300;
        color: #4a4a42;
        font-size: 1.1rem;
    }

    .container > .panel ul > li::before {
        content: "―\2000\2000";
    } 

    .container > .panel > ul > li p {
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
    }
    .container > .panel > ul > li p > span {
        display: inline-block;
        color: rgb(48, 209, 88);
    }
    /* .container > .panel > ul > li p.maybe {

    }

    .container > .panel > ul > li p.probably {

    } */
</style>

