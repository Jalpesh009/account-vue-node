<template>
  <div id="incoming-call">

    <div class="tab">
      <button class="tablinks" @click="tab($event, 'call')"><i class="fas fa-home"/></button>
      <button class="tablinks" @click="tab($event, 'team')"><i class="fas fa-users"/></button>
      <button class="tablinks" @click="tab($event, 'questions')"><i class="fas fa-question"/></button>
      <button class="tablinks" @click="tab($event, 'history')"><i class="fas fa-history"/></button>
    </div>

    <div id="call" class="tabcontent">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h4 class="text-center">Certainly, can I start with your name and phone number?</h4>
          <div class="row">
            <div class="col-12 col-md-6">
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="col-12 col-md-6">
              <input type="text" class="form-control" placeholder="Phone">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <textarea type="textarea" style="height:120px;"class="form-control" placeholder="Message"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="label">Email<span class="label-additional required">(Required)</span></div>
              <input type="email" class="form-control">
            </div>
            <div class="col-12 col-md-6">
              <div class="label">Where did you hear about us?<span class="label-additional required">(Required)</span></div>
              <select class="form-control">
                <option>Please choose an option</option>
              </select>
            </div>
            <div class="col-12 col-md-6">
              <div class="label">Company name<span class="label-additional"/></div>
              <input type="text" class="form-control" placeholder="Do not push to get this">
            </div>
            <div class="col-12 col-md-6">
              <div class="label">Date<span class="label-additional required">(Required)</span></div>
              <input type="date" class="form-control">
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <h4 class="text-center">Choose call rule</h4>
          <div id="rules" class="row">
            <div class="col-lg-5">
              <div class="rules-tab">
                <button class="tablinks">New sales enquiry</button>
                <button class="tablinks">Accounts payable/Receivable</button>
                <button class="tablinks">Existing clients</button>
                <button class="tablinks">Speak with a staff member</button>
              </div>
            </div>
            <div class="col-lg-7">
              <button class="tablinks">Virtual reception services</button>
              <button class="tablinks">Can you help me sing up for a paid account?</button>
              <button class="tablinks">How much are your plans and packages?</button>
              <button class="tablinks">How can I get a free trial of the service?</button>
            </div>

          </div>
          <div id="assign-users">
            <div class="assign-user">
              <img src="assets/images/users/user-2.jpg" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image">
              <div class="contact-name text-center">
                <h5>Stephen Meritt</h5>
              </div>
              <button class="btn btn-xs btn-block transfer"><span>Transfer online</span> </button>
            </div>
          </div>
          <div id="instructions" class="mt-2">
            <p>Please take details as below, ask them to describe the issue they are having</p>
            <p>Attempt transfer</p>
            <p>If unavailable, advise caller that an Account Manager will get back to them as soon as available.</p>

          </div>
        </div>
      </div>
    </div>

    <div id="team" class="tabcontent">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card user-card">
            <img src="assets/images/users/user-2.jpg" class="contact-image rounded-circle avatar-lg" alt="profile-image">
            <h5>Stephen Meritt</h5>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card user-card">
            <img src="assets/images/users/user-2.jpg" class="contact-image rounded-circle avatar-lg" alt="profile-image">
            <h5>All acount enquiries</h5>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card user-card">
            <img src="assets/images/users/user-5.jpg" class="contact-image rounded-circle avatar-lg" alt="profile-image">
            <h5>Complaints</h5>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card user-card">
            <img src="assets/images/users/user-5.jpg" class="contact-image rounded-circle avatar-lg" alt="profile-image">
            <h5>Sales call</h5>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card user-card">
            <img src="assets/images/users/user-2.jpg" class="contact-image rounded-circle avatar-lg" alt="profile-image">
            <h5>Recruitment team</h5>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="card user-card">
            <img src="assets/images/users/user-5.jpg" class="contact-image rounded-circle avatar-lg" alt="profile-image">
            <h5>Leah Broune</h5>
          </div>
        </div>
      </div>
    </div>

    <div id="questions" class="tabcontent">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>How long is the free trial?</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>What are the package costs?</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>Are there any additional charges?</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>Where can I get more information?</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>Are operators/receptionists local?</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>How do I integrate with my other cloud based applications?</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card faq-card">
            <p>What is a trial phone number?</p>
          </div>
        </div>
      </div>
    </div>

    <div id="history" class="tabcontent">
      <p class="h3 text-center">This person has not called before</p>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    $(document).on('click', '.faq-card', function() {
      console.log('1')
      $('.faq-card').removeClass('faq-card-active')
      $(this).addClass('faq-card-active')
      console.log(this)
    })
  },
  methods: {
    tab(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tab).style.display = 'block'
  evt.currentTarget.className += ' active'
}
  }
}
</script>
<style>
  /* Style the tab */
.tab {
  float: left;
  background-color: #323A46;
  width: 80px;
  height: 100vh;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  height: 25%;
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  color:#9DA7B3;
  font-size: 2rem;
  border-bottom: 1px solid #818487;

}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #363F4C;
}

/* Create an active/current "tab button" class */
.tab button.active {
  color:#fff;

}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 35px 12px 0;
}

.tabcontent:first-child {
  display: block;
}

.user-card {
  text-align: center;
}

.user-card h5{
  margin-bottom: 1rem;

}

.user-card img {
  display: block;
  margin: 1rem auto 0.5rem;
}

.faq-card {
  cursor: pointer;
  color:#6C757D;
}

.faq-card-active {
  color:#fff;
  background-color: #5370FF;
}

.faq-card p {
  margin: 0.75rem 1rem;
}

#history .h3 {
  margin-top: 35vh;
}

#call {
  padding-top:0;
}
#call h4 {
  border-bottom: 1px solid #CED4DA;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
}

#call .form-control {
  margin-bottom: 1rem;
}

#call .label {
  color:#323A46;
}

.rules-tab {
  margin-top:0;
  display: block;
}

#rules button {
  display: block;
  background-color: #fff;
  color:#6C757D;
  margin-top:0;
  padding: 0.65rem 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.9rem;
}

#assign-users,#instructions {
  background-color: #fff !important;
  padding: 1rem;
  border-radius: 5px;
}

#instructions p {
  color:#323A46 !important;
  font-weight: 600;
}

</style>
