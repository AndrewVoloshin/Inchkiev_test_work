<script>
export default {
    data() {
        return {
            formData: {
                lastName: '',
                firstName: '',
                organization: '',
                role: 'СПОЖИВАЧ',
                subject: '',
                message: '',
                email: '',
                country: '',
                city: '',
                index: '',
                address: '',
                phone: ''
            },
            formattedPhone: '',

            errors: {
                lastName: false,
                firstName: false,
                organization: false,
                subject: false,
                message: false,
                email: false,
                country: false,
                city: false,
                index: false,
                address: false,
                phone: false,
            },

            validationPatterns: {
                lastName: /^[А-Яа-яҐґЄєЇїІі]+$/,
                firstName: /^[А-Яа-яҐґЄєЇїІі]+$/,
                organization: /^[А-Яа-яҐґЄєЇїІі]*$/,
                country: /^[А-Яа-яҐґЄєЇїІі]+$/,
                city: /^[А-Яа-яҐґЄєЇїІі]+$/,
                index: /^\d+$/,
                address: /^[А-Яа-яҐґЄєЇїІі\d/\-,]+$/,
                phone: /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                subject: /^[А-Яа-яҐґЄєЇїІі\d\s\-,]*$/,
                message: /^[А-Яа-яҐґЄєЇїІі\d\s\-,]+$/
            }
        };
    },
    methods: {
        handleSubmit() {
            if (this.validateForm()) {
                alert(JSON.stringify(this.formData, null, 2));
            } else {
                alert('Будь ласка, заповніть всі обов\'язкові поля правильно.');
            }
        },

        validateForm() {
            let valid = true;

            Object.keys(this.errors).forEach(key => {
                this.errors[key] = !this.validateField(key, this.formData[key]);
                if (this.errors[key]) valid = false;
            });

            return valid;
        },

        validateField(key, value) {
            const pattern = this.validationPatterns[key];
            if (key === 'phone') return this.validatePhoneField(pattern)
            return pattern ? pattern.test(value) : true;
        },

        validatePhoneField(pattern) {
            return pattern?.test(this.formattedPhone)
        },

        formatPhone(event) {
            const input = event.target.value.replace(/\D/g, '');
            let formattedInput = '';

            if (input.length > 0) {
                formattedInput += '(' + input.substring(0, 3);
            }
            if (input.length >= 4) {
                formattedInput += ') ' + input.substring(3, 6);
            }
            if (input.length >= 7) {
                formattedInput += '-' + input.substring(6, 8);
            }
            if (input.length >= 9) {
                formattedInput += '-' + input.substring(8, 10);
            }

            this.formattedPhone = formattedInput;
            this.formData.phone = input;
        }
    }
};
</script>



<template>
    <div class="feedback-form">
        <form @submit.prevent="handleSubmit">
            <div class="feedback-form__container">
                <div class="column">
                    <!-- Personal Information -->
                    <div class="greeting__container">
                        <h2 class="title greeting__title">ПРЕДСТАВТЕСЯ, БУДЬ ЛАСКА</h2>

                        <div class="greeting__content">
                            <label class="label greeting__label">* ПРІЗВИЩЕ</label>
                            <input v-model="formData.lastName"
                                   :class="{ 'input greeting__input error': errors.lastName }"
                                   type="text"
                                   @input="validateLastName" />
                        </div>

                        <div class="greeting__content">
                            <label class="label greeting__label">* ІМ'Я</label>
                            <input v-model="formData.firstName"
                                   :class="{ 'input greeting__input error': errors.firstName }"
                                   type="text"
                                   @input="validateFirstName" />
                        </div>

                        <div class="greeting__content">
                            <label class="label greeting__label">ОРГАНІЗАЦІЯ ТА ПОСАДА</label>
                            <input v-model="formData.organization"
                                   :class="{ 'input greeting__input error': errors.organization }"
                                   type="text"
                                   @input="validateOrganization" />
                        </div>

                        <div class="greeting__content">
                            <label class="custom-radio">
                                <input v-model="formData.role"
                                       type="radio"
                                       name="role"
                                       value="СПОЖИВАЧ" />
                                <span class="checkmark"></span>
                                СПОЖИВАЧ
                            </label>
                            <br />
                            <label class="custom-radio">
                                <input v-model="formData.role"
                                       type="radio"
                                       name="role"
                                       value="МЕДИЧНИЙ ПРАЦІВНИК" />
                                <span class="checkmark"></span>
                                МЕДИЧНИЙ ПРАЦІВНИК
                            </label>
                            <br />
                            <label class="custom-radio">
                                <input v-model="formData.role"
                                       type="radio"
                                       name="role"
                                       value="ЖУРНАЛІСТ" />
                                <span class="checkmark"></span>
                                ЖУРНАЛІСТ
                            </label>
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="message__container">
                        <h2 class="title message__title">ПОВІДОМЛЕННЯ</h2>

                        <div class="message__content">
                            <label class="label message__label">ТЕМА ПОВІДОМЛЕННЯ</label>
                            <input v-model="formData.subject"
                                   :class="{ 'input message__input error': errors.subject }"
                                   type="text"
                                   @input="validateSubject" />
                        </div>

                        <div class="message__content">
                            <label class="label message__label">* ПОВІДОМЛЕННЯ</label>
                            <textarea v-model="formData.message"
                                      :class="{ 'textarea error': errors.message }"
                                      name="message"
                                      rows="5"
                                      @input="validateMessage"></textarea>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <!-- Contact Information -->
                    <div class="contact__container">
                        <h2 class="title contact__title">КОНТАКТНА ІНФОРМАЦІЯ</h2>

                        <div class="contact__content">
                            <label class="label contact__label">* EMAIL</label>
                            <input v-model="formData.email"
                                   :class="{ 'input contact__input error': errors.email }"
                                   type="email"
                                   @input="validateEmail" />
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* КРАЇНА</label>
                            <input v-model="formData.country"
                                   :class="{ 'input contact__input error': errors.country }"
                                   type="text"
                                   @input="validateCountry" />
                        </div>
                        <div class="contact__content">
                            <label class="label contact__label">* МІСТО</label>
                            <input v-model="formData.city"
                                   :class="{ 'input contact__input error': errors.city }"
                                   type="text"
                                   @input="validateCity" />
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* ІНДЕКС</label>
                            <input v-model="formData.index"
                                   :class="{ 'input contact__input error': errors.index }"
                                   type="text"
                                   @input="validateIndex" />
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* АДРЕСА</label>
                            <input v-model="formData.address"
                                   :class="{ 'input contact__input error': errors.address }"
                                   type="text"
                                   @input="validateAddress" />
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* ТЕЛЕФОН</label>
                            <input v-model="formattedPhone"
                                   @input="formatPhone"
                                   :class="{ 'input contact__input error': errors.phone }"
                                   type="text"
                                   id="phone"
                                   placeholder="(___) ___-__-__"
                                   maxlength="15" />
                        </div>
                    </div>

                    <button class="button-submit"
                            type="submit">відправити</button>
                </div>
            </div>
        </form>
    </div>
</template>


<style scoped>
input.error,
textarea.error {
    border: 1px solid #d9534f;
    background-color: #f9d6d5;
}

.button-submit {
    width: 246px;
    height: 31px;
    color: white;
    font-size: 22px;
    background-color: #464646;
}

.title {
    font-weight: 600;
    font-size: 18px;
}

.greeting__title {
    margin: 0;
    margin-bottom: 51px;
}

.message__title {
    margin: 0;
    margin-bottom: 18px;
}

input {
    width: 246px;
    height: 31px;
}

.label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;

}

.contact__title {
    margin: 0;
    margin-bottom: 52px;
}


input[type="radio"] {
    margin-right: 10px;
}

.greeting__content {
    padding-left: 1px;
}

.greeting__content:nth-child(2) {
    margin-bottom: 10px;
}

.greeting__content:nth-child(3) {
    margin-bottom: 16px;
}

.greeting__content:nth-child(4) {
    margin-bottom: 9px;
}

.greeting__content:nth-child(4) .greeting__label {
    margin-bottom: 7px;
}


.greeting__content:nth-child(2) .greeting__label {
    padding-left: 2px;
}

.greeting__content:nth-child(3) .greeting__label {
    margin-bottom: 1px;
}

.greeting__content:nth-child(4) .greeting__label {
    margin-left: -1px;
}


.custom-radio input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.custom-radio .checkmark {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: white;
    border: 2px solid #000;
    border-radius: 50%;
    margin-right: 4px;

}

.custom-radio input[type="radio"]:checked+.checkmark::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background-color: red;
    border-radius: 50%;
    margin-bottom: 10px;
}

.custom-radio {
    font-size: 12px;
    margin-bottom: 10px;
}

.greeting__label {
    margin-bottom: 3px;
}

.feedback-form {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
}

.feedback-form__container {
    display: flex;
    gap: 133px;
}

.greeting__container {
    margin-bottom: 39px;
}

.contact__content:nth-child(2) {
    margin-bottom: 17px;
}

.contact__content:nth-child(3) {
    margin-bottom: 20px;
}

.contact__content:nth-child(4) {
    margin-bottom: 25px;
}

.contact__content:nth-child(5) {
    margin-bottom: 27px;
}

.contact__content:nth-child(6) {
    margin-bottom: 23px;
}

.message__container {}

.message__title {}

.message__content:nth-child(2) {
    margin-bottom: 22px;
}

textarea {
    width: 246px;
    height: 85px;
}

.contact__container {
    margin-bottom: 52px;
}

input,
textarea {
    width: 100%;
    box-sizing: border-box;
}

.title {
    font-weight: 600;
    font-size: 18px;
}

.greeting__title,
.message__title,
.contact__title {
    margin: 0;
    margin-bottom: 20px;
}

.greeting__content,
.message__content,
.contact__content {
    margin-bottom: 15px;
}

input.error,
textarea.error {
    border: 1px solid #d9534f;
    background-color: #f9d6d5;
}

.button-submit {
    width: 100%;
    height: 40px;
    color: white;
    font-size: 18px;
    background-color: #464646;
    border: none;
    cursor: pointer;
}


@media (max-width: 768px) {
    .feedback-form__container {
        flex-direction: column;
        gap: 20px;
    }

    .column {
        max-width: 100%;
        flex: 1 1 100%;
    }

    .button-submit {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 16px;
    }

    input,
    textarea {
        width: calc(100% - 20px);
    }

    .feedback-form__container {
        padding: 10px;
    }

    .button-submit {
        height: 50px;
        font-size: 16px;
    }
}
</style>
