<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>商品</th>
          <th>訂單編號</th>
          <th>買家編號</th>
          <th>取消/退貨原因</th>
          <th>金額</th>
          <th>退貨物流</th>
          <th>狀態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <ul>
              <li>商品A x 1</li>
              <li>商品B x 2</li>
            </ul>
          </td>
          <td>#890001</td>
          <td>Buyer301</td>
          <td>不符合需求</td>
          <td>$1,200</td>
          <td>物流公司A</td>
          <td>
            <span class="badge badge-warning">退貨中</span>
          </td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <ul>
              <li>商品C x 1</li>
            </ul>
          </td>
          <td>#890002</td>
          <td>Buyer302</td>
          <td>商品有瑕疵</td>
          <td>$600</td>
          <td>物流公司B</td>
          <td>
            <span class="badge badge-error">取消</span>
          </td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <ul>
              <li>商品D x 1</li>
              <li>商品E x 1</li>
            </ul>
          </td>
          <td>#890003</td>
          <td>Buyer303</td>
          <td>配送延遲</td>
          <td>$900</td>
          <td>物流公司C</td>
          <td>
            <span class="badge badge-success">已退款</span>
          </td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// 此處可加入表格的邏輯，例如操作多選項目
</script>
