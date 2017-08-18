<template>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="form-group">
                    <button v-on:click="addType" class="btn btn-success pull-right">添加</button>
                </div>
                <div class="form-group has-success">
                    <label class="control-label" for="type-name">分类名称</label>
                    <input type="text" v-model="typeName" class="form-control" id="type-name">
                </div>
                <div class="form-group has-warning">
                    <label class="control-label" for="up-type">上级分类</label>
                    <input type="text" v-model="upType" class="form-control" id="up-type">
                </div>
                <div class="form-group has-error">
                    <label class="control-label" for="type-sort">排序</label>
                    <input type="text" v-model="sort" class="form-control" id="type-sort">
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">分类列表</div>
            <table class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>分类名称</th>
                    <th>上级分类</th>
                    <th>排序</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="type in typeList">
                    <td>#</td>
                    <td>{{type.typeName}}</td>
                    <td>{{type.upType}}</td>
                    <td>{{type.sort}}</td>
                    <td>
                        <span v-on:click="delType($index)" class="glyphicon glyphicon-remove"></span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                typeName: null,
                upType: null,
                sort: null,
                typeList: []
            }
        },
        methods: {
            addType2(){
                this.$http.get('#').then(function (data) {
                    alert('test')
                })
            },
            addType(){
                if (this.typeName != null && this.upType != null && this.sort != null) {
                    var typeName = this.typeName.trim()
                    var upType = this.upType.trim()
                    var sort = this.sort.trim()

                    this.typeList.push({
                        typeName: typeName,
                        upType, upType,
                        sort: sort
                    })

                    this.typeName = null
                    this.upType = null
                    this.sort = null

                } else {
                    alert('输入不能为空')
                }
            },
            delType(index){
                this.typeList.splice(index, 1)
            }
        }
    }
</script>