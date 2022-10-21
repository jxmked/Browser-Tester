<template>
    <div class="container">
        <div class="panel">
            <label>Results</label>
            <ul>
                <li>
                    <span class="item icons icon-cross">Testing Kit</span>
                </li>
                <li>
                    <span class="item icons icon-cross">Testing Kit</span>
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

    .container > .panel > label {
        font-family: "Montserrat","Sans-serif";
        letter-spacing: 2px;
        font-weight: 600;
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
        font-weight: 400;
        color: #4a4a42;
        font-size: 1.1rem;
    }

    .container > .panel ul > li::before {
        content: "―\2000\2000";
    }
</style>
