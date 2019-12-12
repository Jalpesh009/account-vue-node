<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-box">
          <div class="row">
            <div class="col-lg-3 text-center">
              <a
                data-toggle="modal"
                href="#"
                @click="modalShow =!modalShow"
                data-backdrop="static"
                data-keyboard="false"
              >
                <div class="img-hover">
                  <img
                    src="assets/images/users/user-2.jpg"
                    class="rounded-circle avatar-xxxl img-thumbnail"
                    alt="profile-image"
                  />
                  <div class="img-overlay">
                    Upload
                    <br />
                    <i class="fas fa-camera" />
                  </div>
                </div>
              </a>
              <p class="h2 pt-0 mt-2 mb-1">Mark Baranov</p>
              <p class="h3 font-weight-normal pt-0 mt-0 mb-4">Authorized user</p>
              <div class="identity id-not-confirmed">
                <div v-if="!userVerified" id="identity-not-confirmed" class="alert alert-danger">
                  <strong>Identity not verified</strong>
                  <p>Would you like to verify it now?</p>
                  <a
                    href="#"
                    data-backdrop="static"
                    data-keyboard="false"
                    @click="handleVerifyIdentity"
                  >Verify</a>
                </div>

                <div v-if="userVerified" class="alert alert-success">
                  <strong>
                    <v-icon color="#086637">mdi-marker-check</v-icon>Your Identity Verified
                  </strong>
                </div>
              </div>
            </div>
            <div class="col-lg-9 tab">
              <form method="post">
                <div class="table-responsive">
                  <table class="table table-borderless text-left table-striped account mb-0">
                    <tbody>
                      <tr>
                        <th scope="row" class="column-header">Entity</th>
                        <td>
                          <input type="text" disabled="disabled" name="entity" value="OfficeEarth" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Region</th>
                        <td>
                          <input type="text" disabled="disabled" name="region" value="Australia" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Company No.</th>
                        <td>
                          <input type="text" name="ABN" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Greeting</th>
                        <td>
                          <input
                            type="text"
                            name="greeting"
                            value="Welcome to OfficeEarth, how may I assist?"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Time zone</th>
                        <td>
                          <select>
                            <option
                              timeZoneId="1"
                              gmtAdjustment="GMT-12:00"
                              useDaylightTime="0"
                              value="-12"
                            >(GMT-12:00) International Date Line West</option>
                            <option
                              timeZoneId="2"
                              gmtAdjustment="GMT-11:00"
                              useDaylightTime="0"
                              value="-11"
                            >(GMT-11:00) Midway Island, Samoa</option>
                            <option
                              timeZoneId="3"
                              gmtAdjustment="GMT-10:00"
                              useDaylightTime="0"
                              value="-10"
                            >(GMT-10:00) Hawaii</option>
                            <option
                              timeZoneId="4"
                              gmtAdjustment="GMT-09:00"
                              useDaylightTime="1"
                              value="-9"
                            >(GMT-09:00) Alaska</option>
                            <option
                              timeZoneId="5"
                              gmtAdjustment="GMT-08:00"
                              useDaylightTime="1"
                              value="-8"
                            >(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option
                              timeZoneId="6"
                              gmtAdjustment="GMT-08:00"
                              useDaylightTime="1"
                              value="-8"
                            >(GMT-08:00) Tijuana, Baja California</option>
                            <option
                              timeZoneId="7"
                              gmtAdjustment="GMT-07:00"
                              useDaylightTime="0"
                              value="-7"
                            >(GMT-07:00) Arizona</option>
                            <option
                              timeZoneId="8"
                              gmtAdjustment="GMT-07:00"
                              useDaylightTime="1"
                              value="-7"
                            >(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option
                              timeZoneId="9"
                              gmtAdjustment="GMT-07:00"
                              useDaylightTime="1"
                              value="-7"
                            >(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option
                              timeZoneId="10"
                              gmtAdjustment="GMT-06:00"
                              useDaylightTime="0"
                              value="-6"
                            >(GMT-06:00) Central America</option>
                            <option
                              timeZoneId="11"
                              gmtAdjustment="GMT-06:00"
                              useDaylightTime="1"
                              value="-6"
                            >(GMT-06:00) Central Time (US & Canada)</option>
                            <option
                              timeZoneId="12"
                              gmtAdjustment="GMT-06:00"
                              useDaylightTime="1"
                              value="-6"
                            >(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option
                              timeZoneId="13"
                              gmtAdjustment="GMT-06:00"
                              useDaylightTime="0"
                              value="-6"
                            >(GMT-06:00) Saskatchewan</option>
                            <option
                              timeZoneId="14"
                              gmtAdjustment="GMT-05:00"
                              useDaylightTime="0"
                              value="-5"
                            >(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option
                              timeZoneId="15"
                              gmtAdjustment="GMT-05:00"
                              useDaylightTime="1"
                              value="-5"
                            >(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option
                              timeZoneId="16"
                              gmtAdjustment="GMT-05:00"
                              useDaylightTime="1"
                              value="-5"
                            >(GMT-05:00) Indiana (East)</option>
                            <option
                              timeZoneId="17"
                              gmtAdjustment="GMT-04:00"
                              useDaylightTime="1"
                              value="-4"
                            >(GMT-04:00) Atlantic Time (Canada)</option>
                            <option
                              timeZoneId="18"
                              gmtAdjustment="GMT-04:00"
                              useDaylightTime="0"
                              value="-4"
                            >(GMT-04:00) Caracas, La Paz</option>
                            <option
                              timeZoneId="19"
                              gmtAdjustment="GMT-04:00"
                              useDaylightTime="0"
                              value="-4"
                            >(GMT-04:00) Manaus</option>
                            <option
                              timeZoneId="20"
                              gmtAdjustment="GMT-04:00"
                              useDaylightTime="1"
                              value="-4"
                            >(GMT-04:00) Santiago</option>
                            <option
                              timeZoneId="21"
                              gmtAdjustment="GMT-03:30"
                              useDaylightTime="1"
                              value="-3.5"
                            >(GMT-03:30) Newfoundland</option>
                            <option
                              timeZoneId="22"
                              gmtAdjustment="GMT-03:00"
                              useDaylightTime="1"
                              value="-3"
                            >(GMT-03:00) Brasilia</option>
                            <option
                              timeZoneId="23"
                              gmtAdjustment="GMT-03:00"
                              useDaylightTime="0"
                              value="-3"
                            >(GMT-03:00) Buenos Aires, Georgetown</option>
                            <option
                              timeZoneId="24"
                              gmtAdjustment="GMT-03:00"
                              useDaylightTime="1"
                              value="-3"
                            >(GMT-03:00) Greenland</option>
                            <option
                              timeZoneId="25"
                              gmtAdjustment="GMT-03:00"
                              useDaylightTime="1"
                              value="-3"
                            >(GMT-03:00) Montevideo</option>
                            <option
                              timeZoneId="26"
                              gmtAdjustment="GMT-02:00"
                              useDaylightTime="1"
                              value="-2"
                            >(GMT-02:00) Mid-Atlantic</option>
                            <option
                              timeZoneId="27"
                              gmtAdjustment="GMT-01:00"
                              useDaylightTime="0"
                              value="-1"
                            >(GMT-01:00) Cape Verde Is.</option>
                            <option
                              timeZoneId="28"
                              gmtAdjustment="GMT-01:00"
                              useDaylightTime="1"
                              value="-1"
                            >(GMT-01:00) Azores</option>
                            <option
                              timeZoneId="29"
                              gmtAdjustment="GMT+00:00"
                              useDaylightTime="0"
                              value="0"
                            >(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                            <option
                              timeZoneId="30"
                              gmtAdjustment="GMT+00:00"
                              useDaylightTime="1"
                              value="0"
                            >(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                            <option
                              timeZoneId="31"
                              gmtAdjustment="GMT+01:00"
                              useDaylightTime="1"
                              value="1"
                            >(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option
                              timeZoneId="32"
                              gmtAdjustment="GMT+01:00"
                              useDaylightTime="1"
                              value="1"
                            >(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option
                              timeZoneId="33"
                              gmtAdjustment="GMT+01:00"
                              useDaylightTime="1"
                              value="1"
                            >(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option
                              timeZoneId="34"
                              gmtAdjustment="GMT+01:00"
                              useDaylightTime="1"
                              value="1"
                            >(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                            <option
                              timeZoneId="35"
                              gmtAdjustment="GMT+01:00"
                              useDaylightTime="1"
                              value="1"
                            >(GMT+01:00) West Central Africa</option>
                            <option
                              timeZoneId="36"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Amman</option>
                            <option
                              timeZoneId="37"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Athens, Bucharest, Istanbul</option>
                            <option
                              timeZoneId="38"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Beirut</option>
                            <option
                              timeZoneId="39"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Cairo</option>
                            <option
                              timeZoneId="40"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="0"
                              value="2"
                            >(GMT+02:00) Harare, Pretoria</option>
                            <option
                              timeZoneId="41"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                            <option
                              timeZoneId="42"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Jerusalem</option>
                            <option
                              timeZoneId="43"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Minsk</option>
                            <option
                              timeZoneId="44"
                              gmtAdjustment="GMT+02:00"
                              useDaylightTime="1"
                              value="2"
                            >(GMT+02:00) Windhoek</option>
                            <option
                              timeZoneId="45"
                              gmtAdjustment="GMT+03:00"
                              useDaylightTime="0"
                              value="3"
                            >(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                            <option
                              timeZoneId="46"
                              gmtAdjustment="GMT+03:00"
                              useDaylightTime="1"
                              value="3"
                            >(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                            <option
                              timeZoneId="47"
                              gmtAdjustment="GMT+03:00"
                              useDaylightTime="0"
                              value="3"
                            >(GMT+03:00) Nairobi</option>
                            <option
                              timeZoneId="48"
                              gmtAdjustment="GMT+03:00"
                              useDaylightTime="0"
                              value="3"
                            >(GMT+03:00) Tbilisi</option>
                            <option
                              timeZoneId="49"
                              gmtAdjustment="GMT+03:30"
                              useDaylightTime="1"
                              value="3.5"
                            >(GMT+03:30) Tehran</option>
                            <option
                              timeZoneId="50"
                              gmtAdjustment="GMT+04:00"
                              useDaylightTime="0"
                              value="4"
                            >(GMT+04:00) Abu Dhabi, Muscat</option>
                            <option
                              timeZoneId="51"
                              gmtAdjustment="GMT+04:00"
                              useDaylightTime="1"
                              value="4"
                            >(GMT+04:00) Baku</option>
                            <option
                              timeZoneId="52"
                              gmtAdjustment="GMT+04:00"
                              useDaylightTime="1"
                              value="4"
                            >(GMT+04:00) Yerevan</option>
                            <option
                              timeZoneId="53"
                              gmtAdjustment="GMT+04:30"
                              useDaylightTime="0"
                              value="4.5"
                            >(GMT+04:30) Kabul</option>
                            <option
                              timeZoneId="54"
                              gmtAdjustment="GMT+05:00"
                              useDaylightTime="1"
                              value="5"
                            >(GMT+05:00) Yekaterinburg</option>
                            <option
                              timeZoneId="55"
                              gmtAdjustment="GMT+05:00"
                              useDaylightTime="0"
                              value="5"
                            >(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                            <option
                              timeZoneId="56"
                              gmtAdjustment="GMT+05:30"
                              useDaylightTime="0"
                              value="5.5"
                            >(GMT+05:30) Sri Jayawardenapura</option>
                            <option
                              timeZoneId="57"
                              gmtAdjustment="GMT+05:30"
                              useDaylightTime="0"
                              value="5.5"
                            >(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option
                              timeZoneId="58"
                              gmtAdjustment="GMT+05:45"
                              useDaylightTime="0"
                              value="5.75"
                            >(GMT+05:45) Kathmandu</option>
                            <option
                              timeZoneId="59"
                              gmtAdjustment="GMT+06:00"
                              useDaylightTime="1"
                              value="6"
                            >(GMT+06:00) Almaty, Novosibirsk</option>
                            <option
                              timeZoneId="60"
                              gmtAdjustment="GMT+06:00"
                              useDaylightTime="0"
                              value="6"
                            >(GMT+06:00) Astana, Dhaka</option>
                            <option
                              timeZoneId="61"
                              gmtAdjustment="GMT+06:30"
                              useDaylightTime="0"
                              value="6.5"
                            >(GMT+06:30) Yangon (Rangoon)</option>
                            <option
                              timeZoneId="62"
                              gmtAdjustment="GMT+07:00"
                              useDaylightTime="0"
                              value="7"
                            >(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                            <option
                              timeZoneId="63"
                              gmtAdjustment="GMT+07:00"
                              useDaylightTime="1"
                              value="7"
                            >(GMT+07:00) Krasnoyarsk</option>
                            <option
                              timeZoneId="64"
                              gmtAdjustment="GMT+08:00"
                              useDaylightTime="0"
                              value="8"
                            >(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option
                              timeZoneId="65"
                              gmtAdjustment="GMT+08:00"
                              useDaylightTime="0"
                              value="8"
                            >(GMT+08:00) Kuala Lumpur, Singapore</option>
                            <option
                              timeZoneId="66"
                              gmtAdjustment="GMT+08:00"
                              useDaylightTime="0"
                              value="8"
                            >(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                            <option
                              timeZoneId="67"
                              gmtAdjustment="GMT+08:00"
                              useDaylightTime="0"
                              value="8"
                            >(GMT+08:00) Perth</option>
                            <option
                              timeZoneId="68"
                              gmtAdjustment="GMT+08:00"
                              useDaylightTime="0"
                              value="8"
                            >(GMT+08:00) Taipei</option>
                            <option
                              timeZoneId="69"
                              gmtAdjustment="GMT+09:00"
                              useDaylightTime="0"
                              value="9"
                            >(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                            <option
                              timeZoneId="70"
                              gmtAdjustment="GMT+09:00"
                              useDaylightTime="0"
                              value="9"
                            >(GMT+09:00) Seoul</option>
                            <option
                              timeZoneId="71"
                              gmtAdjustment="GMT+09:00"
                              useDaylightTime="1"
                              value="9"
                            >(GMT+09:00) Yakutsk</option>
                            <option
                              timeZoneId="72"
                              gmtAdjustment="GMT+09:30"
                              useDaylightTime="0"
                              value="9.5"
                            >(GMT+09:30) Adelaide</option>
                            <option
                              timeZoneId="73"
                              gmtAdjustment="GMT+09:30"
                              useDaylightTime="0"
                              value="9.5"
                            >(GMT+09:30) Darwin</option>
                            <option
                              timeZoneId="74"
                              gmtAdjustment="GMT+10:00"
                              useDaylightTime="0"
                              value="10"
                            >(GMT+10:00) Brisbane</option>
                            <option
                              timeZoneId="75"
                              gmtAdjustment="GMT+10:00"
                              useDaylightTime="1"
                              value="10"
                            >(GMT+10:00) Canberra, Melbourne, Sydney</option>
                            <option
                              timeZoneId="76"
                              gmtAdjustment="GMT+10:00"
                              useDaylightTime="1"
                              value="10"
                            >(GMT+10:00) Hobart</option>
                            <option
                              timeZoneId="77"
                              gmtAdjustment="GMT+10:00"
                              useDaylightTime="0"
                              value="10"
                            >(GMT+10:00) Guam, Port Moresby</option>
                            <option
                              timeZoneId="78"
                              gmtAdjustment="GMT+10:00"
                              useDaylightTime="1"
                              value="10"
                            >(GMT+10:00) Vladivostok</option>
                            <option
                              timeZoneId="79"
                              gmtAdjustment="GMT+11:00"
                              useDaylightTime="1"
                              value="11"
                            >(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                            <option
                              timeZoneId="80"
                              gmtAdjustment="GMT+12:00"
                              useDaylightTime="1"
                              value="12"
                            >(GMT+12:00) Auckland, Wellington</option>
                            <option
                              timeZoneId="81"
                              gmtAdjustment="GMT+12:00"
                              useDaylightTime="0"
                              value="12"
                            >(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                            <option
                              timeZoneId="82"
                              gmtAdjustment="GMT+13:00"
                              useDaylightTime="0"
                              value="13"
                            >(GMT+13:00) Nuku'alofa</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Industry</th>
                        <td>
                          <select name="industry">
                            <option value="0" disabled="disabled" selected="selected">None</option>
                            <option value="1">Accounting</option>
                            <option value="3">Advertising</option>
                            <option value="4">Aerospace</option>
                            <option value="5">Agriculture</option>
                            <option value="6">Aircraft</option>
                            <option value="7">Airline</option>
                            <option value="8">Alternative Medicine</option>
                            <option value="9">Apparel &amp; Accessories</option>
                            <option value="10">Automotive</option>
                            <option value="11">Banking</option>
                            <option value="12">Biotechnology</option>
                            <option value="13">Broadcasting</option>
                            <option value="14">Brokerage</option>
                            <option value="83">Building or Trades</option>
                            <option value="15">Cargo Handling</option>
                            <option value="16">Chemicals</option>
                            <option value="17">Cleaning</option>
                            <option value="18">Computer</option>
                            <option value="19">Construction</option>
                            <option value="20">Consulting</option>
                            <option value="21">Consumer Products</option>
                            <option value="22">Cosmetics</option>
                            <option value="23">Defense</option>
                            <option value="24">Department Stores</option>
                            <option value="25">Ecommerce</option>
                            <option value="26">Education</option>
                            <option value="27">Electronics</option>
                            <option value="28">Energy</option>
                            <option value="29">Engineering</option>
                            <option value="30">Entertainment &amp; Leisure</option>
                            <option value="31">Executive Search</option>
                            <option value="32">Financial Services</option>
                            <option value="33">Fitness</option>
                            <option value="34">Food, Beverage &amp; Tobacco</option>
                            <option value="35">Gaming</option>
                            <option value="36">Government</option>
                            <option value="37">Grocery</option>
                            <option value="38">Health Care</option>
                            <option value="39">Hospitality</option>
                            <option value="40">Insurance</option>
                            <option value="41">Internet Publishing</option>
                            <option value="42">Investment Banking</option>
                            <option value="43">IT &amp; Communications</option>
                            <option value="44">Legal</option>
                            <option value="45">Machinery</option>
                            <option value="46">Manufacturing</option>
                            <option value="65">Marketing Service</option>
                            <option value="47">Media</option>
                            <option value="48">Medical Professional</option>
                            <option value="85">Mining</option>
                            <option value="49">Motion Picture &amp; Video</option>
                            <option value="50">Music</option>
                            <option value="51">Newspaper Publishers</option>
                            <option value="52">Not for Profit</option>
                            <option value="53">Online Auctions</option>
                            <option value="54">Other</option>
                            <option value="55">Pension Funds</option>
                            <option value="56">Pharmaceuticals</option>
                            <option value="57">Private Equity</option>
                            <option value="86">Procurement &amp; Supply Chain</option>
                            <option value="58">Professional Services</option>
                            <option value="59">Publishing</option>
                            <option value="60">Real Estate</option>
                            <option value="61">Recruitment</option>
                            <option value="84">Removalist Company</option>
                            <option value="62">Retail &amp; Wholesale</option>
                            <option value="63">Securities &amp; Commodity Exchanges</option>
                            <option value="64">Security</option>
                            <option value="82">SEO</option>
                            <option value="66">Shipping</option>
                            <option value="67">Soap &amp; Detergent</option>
                            <option value="68">Software</option>
                            <option value="69">Sports</option>
                            <option value="70">Support</option>
                            <option value="71">Technology</option>
                            <option value="72">Telecommunications</option>
                            <option value="73">Television</option>
                            <option value="80">Training</option>
                            <option value="74">Transportation</option>
                            <option value="75">Travel</option>
                            <option value="76">Trucking</option>
                            <option value="77">Utilities</option>
                            <option value="78">Venture Capital</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" class="column-header">Language</th>
                        <td>
                          <select disabled="disabled">
                            <option value="0" selected="selected">English</option>
                          </select>
                        </td>
                      </tr>
                      <tr />
                    </tbody>
                  </table>
                  <button
                    type="button"
                    class="test btn btn-success waves-effect float-right width-md waves-light mt-4"
                  >Save</button>
                </div>
                <!-- end .table-responsive-->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end row -->
    <div v-if="modalShow2">
      <VerifyIdentity @verifiedCallBack="onClickVerified" />
    </div>

    <b-modal
      v-model="modalShow"
      ref="my-modal"
      class="modal fade add-cc"
      tabindex="-1"
      role="dialog"
      title="Change user photo"
      aria-labelledby="add-credit-card"
      aria-hidden="true"
      size="lg"
      style="display: none;"
    >
      <template v-slot:default>
        <div class="modal-body">
          <vue-dropify type="file" accept=".jpeg, .pdf, .gif" required />
        </div>
      </template>
      <template v-slot:modal-footer="{close}">
        <button type="button" class="btn btn-success">Upload</button>
      </template>
    </b-modal>
    <b-modal id="thank-you-pop" hide-footer>
      <div class="thank-you-pop text-center">
        <img
          width="100"
          src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png"
          alt
        />
        <h2>Verified</h2>
        <p class="text-warning">It's may be subject to a manual review later</p>
        <!-- <pre class="text-left">{{(userData)}}</pre> -->
      </div>
    </b-modal>
  </div>
  <!-- container-fluid -->
</template>

<script>
import VueDropify from "vue-dropify";
import VerifyIdentity from "../components/Account/VerifyIdentity";
export default {
  components: {
    VerifyIdentity,
    VueDropify
  },
  data: () => ({
    modalShow: false,
    modalShow2: false,
    userVerified: false,
    userData: {}
  }),
  methods: {
    onClickVerified(value) {
      this.userData = value;
      this.$bvModal.show("thank-you-pop"); // someValue
      this.userVerified = true;
    },
    handleVerifyIdentity() {
      this.modalShow2 = !this.modalShow2;
      setTimeout(() => {
        this.$bvModal.show("verify-identity-modal");
      }, 100);
    }
  },
  mounted: function() {
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      if (modalId === "verify-identity-modal") {
        this.modalShow2 = false;
      }
    });
  }
};
</script>
