<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>訂單編號</th>
          <th>買家編號</th>
          <th>商品明細</th>
          <th>金額</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td>#789001</td>
          <td>Buyer201</td>
          <td>
            <ul>
              <li>商品A x 2</li>
              <li>商品B x 1</li>
            </ul>
          </td>
          <td>$1,500</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 2 -->
        <tr>
          <td>#789002</td>
          <td>Buyer202</td>
          <td>
            <ul>
              <li>商品C x 1</li>
              <li>商品D x 3</li>
            </ul>
          </td>
          <td>$2,100</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 3 -->
        <tr>
          <td>#789003</td>
          <td>Buyer203</td>
          <td>
            <ul>
              <li>商品E x 1</li>
              <li>商品F x 2</li>
            </ul>
          </td>
          <td>$1,800</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 4 -->
        <tr>
          <td>#789004</td>
          <td>Buyer204</td>
          <td>
            <ul>
              <li>商品G x 1</li>
            </ul>
          </td>
          <td>$600</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// 可在此撰寫表格邏輯
</script>
