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
    header: "Malzeme adı",
    fieldPlaceHolder: "Malzeme adını giriniz",
    fieldType: "text",
  },
  {
    fieldName: "birimFiyati",
    header: "Birim Fiyatı",
    fieldPlaceHolder: "Birim Fiyatı giriniz",
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
  }
];

function enableEntry() {
  showAddTask.value = !showAddTask.value;
}

const showElements = ref(true);

const showEdit = ref(true);
const editData = ref(null);
</script>

<template>
    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <BreadCrumb text="Makine Teçhizat"/>         
            </div>       
            <div class="col-md-6 col-sm-12 text-right hidden-xs">
                <Button
                    text="Makine/Teçhizat Ekle" buttonClass="btn btn-warning btn-round"
                    @buttonAction="makineTechizatEkle"/>
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
      buttonName:"Makine/Techizatı Kaydet",
      headers: ["Makine Adı", "Stok durumu", "Ortalama maliyet", "İşlem"],
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
    makineTechizatEkle() {
        this.showAddTask = !this.showAddTask;
    },
  },
}
</script>