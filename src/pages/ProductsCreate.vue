<template>
  <b-form @submit.prevent="onSubmit" v-if="show">
    <b-row>
      <b-col col-md-9>
        <b-row>
          <b-col class="col-md-6">
            <b-form-group
              id="input-group-1"
              label="Product Name:"
              label-for="input-1"
              description="Enter product name with clear description"
            >
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                
                placeholder="Product Name"
               size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col class="col-md-6">
            <b-form-group
              id="input-group-2"
              label="Product Brand:"
              label-for="input-2"
              description="Select A Brand"
            >
              <b-form-input
                id="input-1"
                v-model="form.brand"
                type="text"
                required
                placeholder="Product Brand"
                 size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-md-6">
            <b-form-group id="input-group-3" label="Category:" label-for="input-3">
              <b-form-select id="input-3" v-model="form.category" :options="categories"  size="lg" required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col class="col-md-3">
              <b-form-group id="input-group-price" label="Price:" label-for="input-price">
              <b-form-input
                id="input-1"
                v-model="form.price"
                type="text"
                required
                placeholder="300"
                 size="lg"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <div class="col-md-3">
         
             <b-form-group id="input-group-sku" label="Sku:" label-for="input-price">
              <b-form-input
                id="input-sku"
                v-model="form.sku"
                type="text"
                required
                placeholder="sku-1029-5998"
                 size="lg"
              ></b-form-input>
               </b-form-group>

          </div>
        </b-row>

         <el-input-number v-model="form.inStock" :step="1"></el-input-number>
        
            <b-form-group id="input-group-content" label="Description:" label-for="input-content">
          <ckeditor :editor="editor" v-model="form.content" ></ckeditor>
          </b-form-group>


          <el-badge :value="200" :max="99" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
<!--         
               <b-form-group id="input-group-tags" label="Product Tags:" label-for="input-tags">
               <tags-input element-id="tags" 
    v-model="form.tags"
    :existing-tags="[
        { key: 'web-development', value: 'Web Development' },
        { key: 'php', value: 'PHP' },
        { key: 'javascript', value: 'JavaScript' },
    ]"
    :typeahead="true"></tags-input>
          </b-form-group> -->


          <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>


  <el-button
    plain
    @click="open">
    Notification with offset
  </el-button>


      </b-col>
      <div class="col-md-3">
        <div class="card mt-4">
          <h6 class="card-header white">Publish Box</h6>
          <div class="card-body">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
          </div>
          <div class="card-footer bg-transparent">
            <button class="btn btn-primary btn-sm" type="submit">Publish</button>
          </div>
          
        </div>
      </div>
    </b-row>
  </b-form>
</template>

<script>
import mixins from "../helpers/mixins.js";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  mixins: [mixins],

  data() {
    return {
      errors:[],
      form: {
        name: "",
        brand: "",
        price: "",
        sku: "",
        category: null,
         inStock: 5,
        content: 'Write Something',
        checked: [],
          tags: [
            { key: 'web-development', value: 'Web Development' },
            { key: 'php', value: 'PHP' },
            { key: 'javascript', value: 'JavaScript' },
        ],
         dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      },
      
      categories: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,
      editor: ClassicEditor,
      
    };
  },
  methods: {
    onSubmit() {
     /// alert(JSON.stringify(this.form));
     this.errors =
       [
          {
          name:{
            0 : "The name filed is requied"
          }
        }
      
       ]
    },

     open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      },

         handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }

 
  

  }
};
</script>
<style>
  .ck-editor__editable {
    min-height: 350px;
   }

    .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>