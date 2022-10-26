<script setup lang="ts">
    defineProps<{
        title:string,
        items:object|string
    }>();
</script>

<script setup lang="ts">
    import Item from "./Item.vue";
    import Self from "./TestList.vue";
</script>
<template>
    <label>{{title}}</label>
    <ul v-for="[key, value] in Object.entries(items)">
        <Item v-if="['string', 'boolean'].indexOf((typeof value)) != -1" title="{{key}}" value="{{value}}" />
        <li v-else>
            <Self title="{{key}}" items="{{value}}" />
        </li>
    </ul>
</template>

<style scoped>
    .container {
        width: 96%;
        height: auto;
        margin: 1.7rem auto;
        padding: 5px 10px;
        box-sizing: border-box;
        max-width: 650px;
        font-family: 'Montserrat';
        font-weight: 500;
        font-style: normal;
        color: #4a4a42;
        padding-bottom: 1.3rem;
        border-bottom: 1px solid #4a4a42;
    }

    .container > .panel label {
        font-family: "Montserrat","Sans-serif";
        letter-spacing: 2px;
        font-weight: 600;
        margin-top: 50px;
    }

    .container > .panel ul {
        list-style: none;
        padding: 0;
        margin: .5rem 0rem .5rem 1rem
    }
</style>
