<template>
  <div>
    <h1>買い物リスト</h1>

    <!-- <label v-for="label in options" v-bind:key="label.value">
      <input type="radio" v-model="current" v-bind:value="label.value">{{ label.label }}
    </label>
    <p>品名:<input type="text" name="productName" v-model="productName" v-bind:class="{'alert-color': !validate}"
        value="" size="40" placeholder="品名を入力してください" />
    </p>

    <button v-on:click="doAddProduct" v-bind:disabled="!isEntered">追加</button>
    <hr>
    <table>
      <thead v-pre>
        <tr>
          <th class="index">No</th>
          <th class="name">商品名</th>
          <th class="memo">メモ</th>
          <th class="state">状態</th>
          <th class="delete">削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in computedProducts" v-bind:key="index">
          <td class="index">{{ index + 1 }}</td>
          <td class="name">{{ item.name }}</td>
          <td class="memo">{{ item.memo }}</td>
          <td class="state">
            <button v-on:click="doChangeProductState(item)">{{ labels[item.state] }}</button>
          </td>
          <td class="delete">
            <button v-on:click="doDeleteProduct(item)">削除</button>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>
<!-- <script src="/views/js/product.js" defer></script> -->
