<template>
    <svg width="100%" height="100%">
        <circle v-for="(item, i) in h.descendants()"
                :key="i"
                :r="item.r"
                :cx="item.x"
                :cy="item.y"
                stroke="black"
                :fill="fillCircles(item)"
        >
            <title>{{item.data.key}}: {{item.value}}</title>
        </circle>
    </svg>

</template>

<script src="./lib/d3PackComponent.js"></script>

<style src="./lib/d3PackComponent.css" scoped></style>