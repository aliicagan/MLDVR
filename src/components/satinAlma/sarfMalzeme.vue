<script setup>
import { isReactive, onMounted, ref } from "vue";
import Button from '../Common/Button.vue';
import BreadCrumb from '../Common/BreadCrumb.vue';
import ListElement from '../Common/ListElement.vue';
import NewEntry from '../Common/NewEntry.vue';
import axios from "axios";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const animalTags = ref([]);

onMounted(async () => {
  try {
    await fetchData();
  } catch (e) {
    console.log(e);
  }
});

async function fetchData() {
  const { data } = await axios.get("/tenant/animal-tags");
  const allTags = data.data;
  animalTags.value = transformArray(allTags);
}

async function addElement(object) {
  const payload = { data: object };
  axios.post("/tenant/animal-tags", payload)
    .then(async (response) => {
      toast("Kaydetme başarılı!");
      await fetchData();
    })
    .catch((error) => {
      console.log(error);
    });

}

async function deleteElement(elementId) {
  try {
    await axios.delete("/tenant/animal-tags/" + elementId);
    toast("Silme başarılı!");
    await fetchData();
  } catch (e) {
    console.log(e);
  }
}

async function enableEdit(elementId) {
  const response = await axios.get("/tenant/animal-tags");
  const allBreeds = transformArray(response.data.data);
  showEdit.value = true;
  editData.value = allBreeds.find(item => item.id === elementId);
  showElements.value = false;
  showAddTask.value = false;
}

async function disableEdit(elementId) {
  showEdit.value = false;
  showElements.value = true;
}

async function editElement(object, objectId) {
  const payload = { data: object };
  axios.put("/tenant/animal-tags/" + objectId, payload)
    .then(async (response) => {
      toast("Edit başarılı!");
      await fetchData();
      showEdit.value = false;
      showElements.value = true;
    })
    .catch((error) => {
      console.log(error);
    });
}


function transformArray(allItems){
  const transformedArray = allItems.map(obj => {
    return {
      id: obj.id,
      name: obj.attributes.name,
      shortCode: obj.attributes.shortCode,
    };
  });
  return transformedArray;
}

const fields = [
  {
    fieldName: "name",
    header: "Malzeme adını giriniz",
    fieldPlaceHolder: "Malzeme adını giriniz giriniz",
    fieldType: "text",
  },
   {
    fieldName: "alimTarihi",
    header: "Alım Tarihi",
    fieldPlaceHolder: "Alım Tarihi giriniz",
    fieldType: "date"
  },
  {
    fieldName: "adet",
    header: "Adet",
    fieldPlaceHolder: "Adet",
    fieldType: "text"
  },
];

function enableEntry() {
  showAddTask.value = !showAddTask.value;
}

const showElements = ref(true);
const showAddTask = ref(true);
const showEdit = ref(false);
const editData = ref(null);

</script>

<template>
    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <BreadCrumb text="Sarf Malzeme"/>         
            </div>       
            <div class="col-md-6 col-sm-12 text-right hidden-xs">
                <Button
                    text="Sarf Malzeme Ekle" buttonClass="btn btn-warning btn-round"
                      @buttonAction="enableEntry"/>
            </div>
        </div>
    </div>
 <NewEntry v-if="showAddTask" :fields="this.fields" :headers="this.headers" :buttonName="buttonName"/>
    <ListElement  :headers="this.headers" :fields="this.fields" :data="jsonData" :editEnabled="false" :enableEdit="enableEdit" :deleteElement="deleteElement" />
    <ElementEditor v-if="showEdit" :fields="fields" :disableEdit="disableEdit" :formData="editData" :editElement="editElement"/>
   
 


</template>

<script>
export default {
  components: {
    Button,
    BreadCrumb,
    ListElement,
    NewEntry,
  },
  setup() {
    return {
      animalTags,
      headers,
      fields,
      jsonData,
      showAddTask,
      fetchData,
      deleteElement,
      editElement,
      enableEdit,
      asiEkle,
    };
  },
    data() {
    return {
      showAddTask: false,
      buttonName:"Malzemeyi Kaydet",
      headers: ["Malzeme Adı", "Stok durumu", "Ortalama maliyet", "İşlem"],
      fields: [{
        fieldPlaceHolder: "Malzeme adını giriniz",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Birim Fiyatı",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Alım Tarihi",
        fieldType: "date"
      },
      {
        fieldPlaceHolder: "Adet",
        fieldType: "text"
      },
     
    ],
 
    jsonData: {
        malzeme: 'Tuz',
        stok: 12,
        fiyat: 800 +' TL',
      },
    }
  },
  methods: {
    sarfMalzemeEkle() {
        this.showAddTask = !this.showAddTask;
    },
  },
}
</script>