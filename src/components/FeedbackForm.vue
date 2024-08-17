<script>

</script>

<template>
    <div class="feedback-form">
        <form>
            <div class="feedback-form__container">



                <div class="column">

                    <div class="greeting__container">
                        <h2 class="title greeting__title">ПРЕДСТАВТЕСЯ, БУДЬ ЛАСКА</h2>

                        <div class="greeting__content">
                            <label class="label greeting__label">* ПРІЗВИЩЕ</label>
                            <input class="input greeting__input"
                                   type="text">
                        </div>

                        <div class="greeting__content">
                            <label class="label greeting__label">* ІМ'Я</label>
                            <input class="input greeting__input"
                                   type="text">
                        </div>

                        <div class="greeting__content">
                            <label class="label greeting__label">ОРГАНІЗАЦІЯ ТА ПОСАДА</label>
                            <input class="input greeting__input"
                                   type="text">
                        </div>

                        <div class="greeting__content">
                            <label class="custom-radio">
                                <input type="radio"
                                       name="option"
                                       value="СПОЖИВАЧ"
                                       checked>
                                <span class="checkmark"></span>
                                СПОЖИВАЧ
                            </label>
                            <br>
                            <label class="custom-radio">
                                <input type="radio"
                                       name="option"
                                       value="МЕДИЧНИЙ ПРАЦІВНИК">
                                <span class="checkmark"></span>
                                МЕДИЧНИЙ ПРАЦІВНИК
                            </label>
                            <br>
                            <label class="custom-radio">
                                <input type="radio"
                                       name="option"
                                       value="ЖУРНАЛІСТ">
                                <span class="checkmark"></span>
                                ЖУРНАЛІСТ
                            </label>
                        </div>




                    </div>


                    <div class="message__container">
                        <h2 class="title message__title">ПОВІДОМЛЕННЯ</h2>


                        <div class="message__content">
                            <label class="label message__label">ТЕМА ПОВІДОМЛЕННЯ</label>
                            <input class="input message__input"
                                   type="text">
                        </div>

                        <div class="message__content">
                            <label class="label message__label">* ПОВІДОМЛЕННЯ</label>
                            <textarea class="textarea"
                                      name="message"
                                      rows="5"
                                      cols="33"></textarea>

                        </div>

                    </div>

                </div>

                <div class="column">

                    <div class="contact__container">
                        <h2 class="title contact__title">КОНТАКТНА ІНФОРМАЦІЯ</h2>


                        <div class="contact__content">
                            <label class="label contact__label">* EMAIL</label>
                            <input class="input contact__input"
                                   type="text">
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* КРАЇНА</label>
                            <input class="input contact__input"
                                   type="text">
                        </div>
                        <div class="contact__content">
                            <label class="label contact__label">* МІСТО</label>
                            <input class="input contact__input"
                                   type="text">
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* ІНДЕКС</label>
                            <input class="input contact__input"
                                   type="text">
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* АДРЕСА</label>
                            <input class="input contact__input"
                                   type="text">
                        </div>

                        <div class="contact__content">
                            <label class="label contact__label">* ТЕЛЕФОН</label>


                            <input class="input contact__input"
                                   type="text"
                                   id="phone"
                                   name="phone"
                                   placeholder="(___) ___-__-__"
                                   maxlength="14">
                        </div>




                    </div>

                    <button class="button-submit" type="button">відправити</button>

                </div>

            </div>
        </form>
    </div>
</template>

<style scoped>

.button-submit{
width: 246px;
height: 31px;
color:white;
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

.input {
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
}

.feedback-form__container {
    display: flex;
    gap: 133px;
}

.column {}

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



.message__label {}

.input {}

.message__input {}

.textarea {
    width: 246px;
    height: 85px;
}




.contact__label {}

.contact__input {}

.message__container {}

.contact__container {
    margin-bottom: 52px;
}
</style>
