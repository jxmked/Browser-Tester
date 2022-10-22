<script setup lang="ts">
    import Cross from "./icons/cross.vue";
    import Check from "./icons/check.vue";



</script>
<template>
    <div class="container">
        <div class="panel">
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
