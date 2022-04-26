<template>
  <section>
    <b-row class="mt-14">
      <b-col cols="8" offset="2">
        <b-row>
          <b-col>
            <h1 class="text-2xl text-gray-700 font-semibold">
              Register Participants
            </h1>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <b-card>
              <b-row>
                <b-col cols="4">
                  <p class="font-semibold text-lg">Registrant information</p>
                  <p class="text-gray-500">
                    Masukkan data pendaftar dengan benar
                  </p>
                </b-col>
                <b-col col="8">
                  <p>Pilih Jadwal Event</p>

                  <b-row>
                    <b-col class="mt-2">
                      <b-card
                        class="cursor-pointer"
                        @click="picked = 0"
                        :class="{ cardActive: picked == 0 }"
                      >
                        <b-card-text>
                          <h1 class="font-semibold">Rabu 18 Mei 2022</h1>
                          <p class="text-gray-500 mt-2">
                            Jam 14.00 - 17.00 WIB, <br />Wisma 46
                          </p>
                          <p class="font-semibold mt-3">Rp 200,000 / Orang</p>
                        </b-card-text>
                        <img
                          style="
                            position: absolute;
                            top: 0;
                            bottom: 75%;
                            left: 80%;
                            right: 0;
                            margin: auto;
                            height: 18px;
                            width: 18px;
                          "
                          src="../../static/checkmark1.svg"
                          alt=""
                          v-if="picked === 0"
                        />
                      </b-card>
                    </b-col>
                    <b-col class="mt-2">
                      <b-card
                        class="cursor-pointer"
                        @click="picked = 1"
                        :class="{ cardActive: picked == 1 }"
                      >
                        <b-card-text>
                          <h1 class="font-semibold">Kamis 19 Mei 2022</h1>
                          <p class="text-gray-500 mt-2">
                            Jam 14.00 - 17.00 WIB, <br />Wisma 46
                          </p>
                          <p class="font-semibold mt-3">Rp 200,000 / Orang</p>
                        </b-card-text>
                        <img
                          style="
                            position: absolute;
                            top: 0;
                            bottom: 75%;
                            left: 80%;
                            right: 0;
                            margin: auto;
                            height: 18px;
                            width: 18px;
                          "
                          src="../../static/checkmark1.svg"
                          alt=""
                          v-if="picked === 1"
                        />
                      </b-card>
                    </b-col>
                    <b-col class="mt-2">
                      <b-card
                        class="cursor-pointer"
                        @click="picked = 2"
                        :class="{ cardActive: picked == 2 }"
                      >
                        <b-card-text>
                          <h1 class="font-semibold">Sabtu 21 Mei 2022</h1>
                          <p class="text-gray-500 mt-2">
                            Jam 10.00 - 14.00 WIB, <br />Wisma 46
                          </p>
                          <p class="font-semibold mt-3">Rp 200,000 / Orang</p>
                        </b-card-text>
                        <img
                          style="
                            position: absolute;
                            top: 0;
                            bottom: 75%;
                            left: 80%;
                            right: 0;
                            margin: auto;
                            height: 18px;
                            width: 18px;
                          "
                          src="../../static/checkmark1.svg"
                          alt=""
                          v-if="picked === 2"
                        />
                      </b-card>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col class="mt-3">
                      <b-form-group label-for="name" label="Name :">
                        <b-form-input
                          v-model="$v.participants.name.$model"
                          :state="checkIfValid('name')"
                          id="name"
                          type="text"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group label-for="email" label="Email :">
                        <b-form-input
                          v-model="$v.participants.email.$model"
                          :state="checkIfValid('email')"
                          id="email"
                          type="email"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group label-for="no" label="No Whatsapp :">
                        <b-form-input
                          v-model="$v.participants.number.$model"
                          :state="checkIfValid('number')"
                          id="no"
                          type="number"
                        ></b-form-input>
                      </b-form-group>

                      <b-button
                        class="bg-emerald-500 text-white"
                        variant="outline"
                        @click="tambahForm"
                        >Tambah Participant</b-button
                      >
                    </b-col>
                  </b-row>

                  <b-row v-if="tambahan.length > 0">
                    <b-col>
                      <div
                        v-for="(item, idx) in tambahan"
                        :key="idx"
                        class="mt-2 mb-2"
                      >
                        <b-form-group label-for="name" label="Name :">
                          <b-form-input
                            v-model="tambahan[idx].name"
                            id="name"
                            type="text"
                          ></b-form-input>
                        </b-form-group>
                        <b-row>
                          <b-col>
                            <b-form-group label-for="email" label="Email :">
                              <b-form-input
                                v-model="tambahan[idx].email"
                                id="email"
                                type="email"
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col>
                            <b-form-group label-for="no" label="No Whatsapp :">
                              <b-form-input
                                v-model="tambahan[idx].number"
                                id="no"
                                type="number"
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>

                        <b-button
                          variant="outline"
                          size="sm"
                          @click="
                            $bvModal.show('modalConfirmation'), (deleteId = idx)
                          "
                          >Hapus</b-button
                        >
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-card>

            <b-row>
              <b-col offset="10">
                <div class="flex justify-end mt-4">
                  <b-button
                    variant="outline"
                    class="bg-lightBlue-500 text-white"
                    @click="submit"
                    >Submit</b-button
                  >
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <ModalConfirmation @delForm="delForm" />
    <ModalSubmit
      :participants="participants"
      :tambahan="tambahan"
      :picked="picked"
    />
  </section>
</template>

<script>
import ModalConfirmation from "./ModalConfirmation";
import ModalSubmit from "./ModalSubmit";
import { validationMixin } from "vuelidate";
import { required, numeric, email, minLength } from "vuelidate/lib/validators";
export default {
  components: { ModalConfirmation, ModalSubmit },
  mixins: [validationMixin],
  data() {
    return {
      tambahan: [],
      participants: {
        name: "",
        number: "",
        email: "",
      },
      deleteId: "",
      picked: 0,
    };
  },
  computed: {
    isValid() {
      return !this.$v.data.$invalid;
    },
    isDirty() {
      return this.$v.data.$anyDirty;
    },
  },
  validations() {
    return {
      participants: {
        name: {
          required,
        },
        email: {
          required,
          email,
        },
        number: {
          required,
          numeric,
          minLength: minLength(10),
        },
      },
    };
  },
  methods: {
    checkIfValid(fieldName) {
      const field = this.$v.participants[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
    },
    tambahForm() {
      this.tambahan.push({
        name: "",
        email: "",
        number: "",
      });
    },
    delForm() {
      this.tambahan.splice(this.deleteId, 1);
      this.$bvModal.hide("modalConfirmation");
    },
    submit() {
      setTimeout(() => {
        this.$bvModal.show("modalSubmit");
      }, 100);
    },
  },
};
</script>

<style scoped>
.cardActive {
  border: 2px solid #7b00ff;
}
</style>
