<template>
    <div class="card contact-card">
        <div class="contact-name">
            <h4>{{ contact_name }}</h4>
        </div>
        <img :src="img_src" class="contact-image rounded-circle avatar-xl" alt="profile-image">    
        <div class="contact-info">
            <span class="contact-phone">{{ contact_phone }}</span>
            <span class="contact-email">{{ contact_email }}</span>
            <span class="contact-company">{{ contact_company }}</span>
            <span class="contact-type">{{ contact_type }}</span>
        </div>
        <ul class="list-unstyled list-inline text-center contact-buttons mb-0">
            <li class="list-inline-item"><i class="fas fa-calendar-alt"></i></li>
            <li class="list-inline-item"><i class="fas fa-envelope"></i></li>
            <li class="list-inline-item"><i class="fas fa-phone"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ContactBlock',
    props: ['contact_name', 'img_src', 'contact_phone', 'contact_email', 'contact_company', 'contact_type']
}
</script>
