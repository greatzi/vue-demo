<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{ count }}</h3>
        <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>

</template>
<script>
    import store from '@/store'
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    export default {
        data() {
            return {
                msg: 'Hello Vuex!'
            }
        },
        store,
        computed:{
            ...mapState(["count"]),
            ...mapGetters(["count"])
        },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        }

    }
</script>