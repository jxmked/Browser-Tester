<script setup lang="ts">
    import Item from "./Item.vue";
</script>
<template>
    <div class="container">
        <div class="panel">
            <label>Results</label>
            <ul>
                <Item title="hotdog" value="false" />
                <Item title="hakdog" value="true" />
                <li>
                    <label>Results</label>
                    <ul>
                        <li>
                            <span class="item icons">
                                <Cross />
                            </span>
                            <p>Testing Kit</p>
                        </li>
                        <li>
                            <span class="item icons">
                                <Check />
                            </span>
                            <p>Testing Kit</p>
                        </li>
                        <li>
                            <p>method - <span>Run</span></p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>method - <span>Run</span></p>
                </li>
            </ul>
        </div>
    </div>
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
