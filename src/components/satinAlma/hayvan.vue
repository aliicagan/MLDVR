<script setup>
import { onMounted, ref } from "vue";
import Button from '../Common/Button.vue';
import BreadCrumb from '../Common/BreadCrumb.vue';
import ListElement from '../Common/ListElement.vue';
import NewEntry from '../Common/NewEntry.vue';
import axios from "axios";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const animals = ref([]);

onMounted(async () => {
  try {
    await fetchData();
  } catch (e) {
    console.log(e);
  }
});

async function fetchData() {
  const { data } = await axios.get("/animals");
  const allmakine = data.data;
  animals.value = transformArray(allmakine);
}
async function addElement(object) {
  const payload = { data: object };
  axios.post("/animals", payload)
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
    await axios.delete("/animals/" + elementId);
    toast("Silme başarılı!");
    await fetchData();
  } catch (e) {
    console.log(e);
  }
}

async function enableEdit(elementId) {
  const response = await axios.get("/animals/");
  const allmakine = transformArray(response.data.data);
  showEdit.value = true;
  editData.value = allmakine.find(item => item.id === elementId);
  showElements.value = false;
}

async function disableEdit(elementId) {
  showEdit.value = false;
  showElements.value = true;
}

async function editElement(object, objectId) {
  const payload = { data: object };
  axios.put("/animals/" + objectId, payload)
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

const fields = [
  {
    fieldName: "name",
    header: "Küpe Numarası",
    fieldPlaceHolder: "Küpe Numarası giriniz",
    fieldType: "text",
  },
  {
    fieldName: "padok",
    header: "Eklendiği Padok",
    fieldPlaceHolder: "Eklendiği Padok giriniz",
    fieldType: "text",
  },
  {
    fieldName: "cins",
    header: "Cinsi",
    fieldPlaceHolder: "Cinsi giriniz",
    fieldType: "text",
  },
  {
    fieldName: "basKilo",
    header: "Başlangıç Kilosu",
    fieldPlaceHolder: "Başlangıç Kilosu giriniz",
    fieldType: "text",
  },
  {
    fieldName: "alimTarihi",
    header: "Alım Tarihi",
    fieldPlaceHolder: "Alım Tarihi giriniz",
    fieldType: "date"
  },
  {
    fieldName: "fiyat",
    header: "Fiyatı",
    fieldPlaceHolder: "Fiyatı",
    fieldType: "text"
  },
  
];

function enableEntry() {
  showAddTask.value = !showAddTask.value;
}

const showElements = ref(true);
const showAddTask = ref(true);
const showEdit = ref(true);
const editData = ref(null);
</script>

<template>

    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <BreadCrumb text="Araçlar"/>         
            </div>       
            <div class="col-md-6 col-sm-12 text-right hidden-xs">
                <Button
                    text="Hayvan ekle" buttonClass="btn btn-success btn-round"
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
         buttonName:"Hayvan Kaydet",
      headers: ["Küpe Numarası", "Eklendiği Padok", "Cinsi", "Başlangıç Kilosu","Fiyatı","Alım Tarihi","İşlem"],
      fields: [{
        fieldPlaceHolder: "Küpe Numarası giriniz",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Eklendiği Padok giriniz",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Cinsi giriniz",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Başlangıç Kilosu giriniz",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Fiyatı giriniz",
        fieldType: "text"
      },
      {
        fieldPlaceHolder: "Alım Tarihi giriniz",
        fieldType: "date"
      },
    ],
    jsonData: {
        arac: 'Kamyon',
        stok: 4,
        fiyat: 450.000,
      },
    }
  },
  methods: {
    aracEkle() {
        this.showAddTask = !this.showAddTask;
    },
  },
}
</script>