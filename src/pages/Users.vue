<template>
  <div>
    <div class="row my-3">
      <div class="col-md-12">
        <div class="card r-0 shadow">
          <div class="table-responsive">
            <form>
              <b-table
                class="table r-0"
                responsive
                striped
                hover
                :fields="fields"
                :items="users"
                :per-page="perPage"
                :current-page="currentPage"
              >
                <template v-slot:head(id)="scope">
                  <div class="text-nowrap">
                    <b-form-checkbox v-model="selectAll" />
                  </div>
                </template>
                <template v-slot:cell(id)="data">
                  <b-form-checkbox v-model="selected" :value="data.value" number />
                </template>
                <template v-slot:cell(name)="data">
                  <div class="d-flex">
                    <user-avatar
                     :name="data.item.name" 
                     :image="data.item.image"
                    />
                    <div>
                      <div>
                        <strong>{{data.item.name}}</strong>
                      </div>
                      <small>{{data.item.email}}</small>
                    </div>
                  </div>
                </template>
                <template v-slot:cell(role)="data">
                  <span class="r-3 badge badge-success">{{data.value}}</span>
                </template>

                <template v-slot:cell(status)="data">
                  <span class="icon icon-circle s-12 mr-2 text-warning"></span>
                  {{data.value}}
                </template>
                <template v-slot:cell(role)="data">
                  <span class="r-3 badge badge-success">{{data.value}}</span>
                </template>
              </b-table>
            </form>
          </div>
        </div>
      </div>
    </div>
    <b-pagination
      v-if="users.length > perPage"
      class="my-3"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>
<script>
import jsonData from "../assets/json/users.json";
import mixins from "../helpers/mixins.js";
import userAvatar from "../components/user-avatar";
export default {
  mixins: [mixins],
  components:{
  userAvatar,
  },
  data() {
    return {
      users: [],
      selected: [],
      perPage: 10,
      currentPage: 1,
      fields: []
    };
  },
  created() {
    this.users = jsonData;
  },
  
  computed: {
    rows() {
      return this.users.length;
    },
    selectAll: {
      get: function() {
        return this.users ? this.selected.length == this.users.length : false;
      },
      set: function(value) {
        var selected = [];

        if (value) {
          this.users.forEach(function(user) {
            selected.push(user.id);
          });
        }

        this.selected = selected;
      }
    }
  }
};
</script>