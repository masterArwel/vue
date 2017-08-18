<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <span class="glyphicon glyphicon-star"></span>
                    </a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a v-link="'/Home'">首页</a></li>
                        <li><a v-link="'/Type'">分类</a></li>
                        <li><a v-link="'/User'">用户</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">

                        <li class=""><a href="#">#</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <router-view>
        </router-view>
    </div>
</template>

<script>
</script>

<style>
</style>
