<template>
  <div class="h-screen w-screen bg-indigo-400 text-center">
    <span class="text-6xl lg:text-8xl text-white mt-5">TODOLIST</span>
    <div class="bg-gray-200 rounded-lg h-4/5  xl:h-3/4 m-auto mt-5 xl:w-3/5 w-4/5">
      <div>
        <input 
        class=" w-8/12 h-10 p-2 mt-5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        v-model="listName"
        >
        <button class="rounded-full h-10 w-10  ml-2 bg-purple-600 text-white hover:bg-purple-800" @click="addTodo">+</button>
      </div>
      <div class=" mt-3">
        <button 
        class="rounded-full  hover:text-purple-500 focus:text-purple-800 mr-3 font-bold"
        v-bind:class="type == null ? 'text-purple-800' : 'text-gray-400' " @click="select(null)">全部</button>
        <button class="rounded-full  hover:text-purple-500 focus:text-purple-800 font-bold"
        v-bind:class="type == 0 ? 'text-purple-800' : 'text-gray-400' " @click="select(0)">未完成</button>
        <button class="rounded-full  hover:text-purple-500 focus:text-purple-800 ml-3 font-bold"
        v-bind:class="type == 1 ? 'text-purple-800' : 'text-gray-400' " @click="select(1)">已完成</button>
      </div>
      <div class="overflow-y-auto h-4/5 xl:h-3/4 lg:h-5/6 pb-3">
        <div 
        v-for="(item,index) in list"
        :key="index"
        class="rounded-lg my-2 ml-auto mr-auto text-left  
        pl-6 w-9/12 h-14 bg-white text-1xl">
         <div class="flex items-center h-14">
           <input 
            type="checkbox" class="h-6 w-6 rounded-full text-indigo-500 focus:ring-0"
            @click="update(item)" :checked="item.type == 1">
            <span class="pl-6 w-3/4 overflow-x-auto h-11 py-2"
            v-bind:class="item.type == 1 ? 'line-through' : ''">{{ item.name }}</span>
            <i class="far fa-trash-alt float-right text-lg cursor-pointer 
            hover:text-purple-800 mt-auto mb-auto lg:ml-5" 
              @click="deleteItem(item.id)"></i>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idb from './indexedDB'

export default {
  name: 'App',
  data(){
    return{
      listName:'',
      list:[],
      type:null
    }
  },
  async created(){
    await idb.getDb()
  },
  async mounted(){
    this.list = await idb.getValue()
  },
  methods:{
    async addTodo(){
      if(this.listName == ''){
        return false
      }
      await idb.saveValue({ name:this.listName, type:0 })
      this.list = await idb.getValue(this.type)
      this.listName  = ''
    },
    async update(data){
      data.type = data.type == 0 ? 1 : 0
      await idb.updateValue(data)
      this.list = await idb.getValue(this.type)
    },
    async select(type){
      this.type = type
      this.list = await idb.getValue(type)
    },
    async deleteItem(id){
      await idb.deleteData(id)
      this.list = await idb.getValue(this.type)
    }
  }
}
</script>

