<template>
  <div class="searchbar">
    <div class="search-tool">
        <input type="text" placeholder="Search..." >
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.searchbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:10px;
    padding-right: 10px;
    background-color: #f5f5f3;
    box-shadow: 2px 2px 2px rgba(0,0,0,.5);
}
.search-tool input{
    height: 30px;
    width: 300px;
    background-color: transparent;
    border-left:none;
    border-right: none;
    border-top:none;
    border-bottom: 2px solid gray;
    margin-left: 10px;
    outline: none;
    color:gray;
}
::placeholder{
  color:gray;
}
.search-tool input:focus{
    border-bottom: 2px solid green;
}
</style>