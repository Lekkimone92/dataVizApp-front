<template>
    <svg width="100%" height="100%">
    <!--   liens     -->
        <path v-for="(link, index) in h.links()"
              :key="`links_${index}`"
              :d="lineGenerator([link.source, link.target])"
              stroke="#63b598"
              stroke-width="1"
              fill="none"
        />
    <!--  Cercles / Noeuds      -->
        <circle v-for="(item, i) in h.descendants()"
                :key="i"
                r="5"
                :cx="center.x + toX(item)"
                :cy="center.y + toY(item)"
                stroke="#c0a43c"
                stroke-width="2"
                fill="none"
        >
            <title>{{item.data.key}}: {{item.value}}</title>
        </circle>
    </svg>

</template>

<script src="./lib/d3RadialComponent.js"></script>

<style src="./lib/d3RadialComponent.css" scoped></style>