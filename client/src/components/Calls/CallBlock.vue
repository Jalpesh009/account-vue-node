<template>
        <div class="call-item" :id="['call-' + id]">
        <div class="call-header clearfix" :id="['call-header-' + id]" data-toggle="collapse" :data-target="['#call-body-' + id]" aria-expanded="true" :aria-controls="['call-body-' + id]">
        <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
            <li class="list-inline-item pt-2"><img :src="image" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
            <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">{{ name }}</span> - <span class="caller-intent">{{ intent }}</span><br><span class="caller-number">{{ number }}</span></li>
        </ul>
        <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
            <li :class="cal_badge ? 'list-inline-item calendar-badge' : 'list-inline-item calendar-badge invisible'"><img src="../../assets/images/badge-calendar.png" alt="Calendar badge"></li>
            <li :class="cal_phone ? 'list-inline-item calendar-phone' : 'list-inline-item calendar-phone invisible'"><img src="../../assets/images/badge-phone.png" alt="Phone badge"></li>
            <li :class="cal_contact ? 'list-inline-item contacts-badge' : 'list-inline-item contacts-badge invisible'"><img src="../../assets/images/badge-contacts.png" alt="Contacts badge"></li>
            <li :class="cal_email ? 'list-inline-item email-badge' : 'list-inline-item email-badge invisible'"><img src="../../assets/images/badge-email.png" alt="Email badge"></li>
            <li class="list-inline-item caller-timestamp"><span>Jun 13</span><br><span class="font-weight-bold">05:15 PM</span></li>
        </ul>
        </div>
        <div class="call-body collapse color-grey" :id="['call-body-' + id]" :aria-labelledby="['call-header-' + id]" data-parent="#calls-accordion">
        <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">{{ company_name }}</span></li>
            <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">{{ duration }} minutes</span></li>
            <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$ {{ cost }}</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></span></li>
            <li class="list-inline-item">Audio:<span class="call-audio pl-1"><i class="fas fa-play"></i></span></li>
        </ul>
        <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
            <li class="list-inline-item align-top pr-3">Message:</li>
            <li class="list-inline-item call-message">{{ message }}</li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CallBlock',
    props: {
        id: Number, 
        image: String, 
        name: String, 
        intent: String, 
        number: String, 
        company_name: String, 
        duration: Number, 
        cost: Number, 
        message: String, 
        cal_badge: Boolean, 
        cal_phone: Boolean,
        cal_contact: Boolean,
        cal_email: Boolean
    }
};
</script>