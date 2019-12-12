<template>
  <b-modal hide-footer
    class="modal fade add-cc"
    title="Credit card information and ownership proof"
    tabindex="-1"
    role="dialog"
    aria-labelledby="add-credit-card"
    aria-hidden="true"
    style="display: none;"
    id="add-cc"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div id="verification-step1">
          <div class="modal-body">
            <h5>STEP 1: Provide your credit card information</h5>
            <p>In order to get your paid account up and running, you need to add a payment card to your account and provide the following information:</p>
            <ul>
              <li>Full name</li>
              <li>Credit card number</li>
              <li>Expiry date</li>
            </ul>
            <div class="add-first-cc">
              <form id="add-credit-card-form">
                <div class="row mt-4">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="credit-card-number">Credit card number</label>
                      <input
                        type="text"
                        id="credit-card-number"
                        name="credit-card-number"
                        class="form-control"
                        data-toggle="input-mask"
                        data-mask-format="0000 0000 0000 0000"
                        placeholder="xxxx xxxx xxxx xxxx"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <label for="credit-card-name">First and last name</label>
                    <input
                      type="text"
                      id="credit-card-name"
                      name="credit-card-name"
                      class="form-control text-uppercase"
                      placeholder="JOHN DOE"
                      required
                    />
                  </div>
                  <div class="col-4">
                    <label for="credit-card-expiry-date">Expiry date</label>
                    <input
                      type="text"
                      id="credit-card-expiry-date"
                      name="credit-card-expiry-date"
                      class="form-control"
                      data-toggle="input-mask"
                      data-mask-format="00/00"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="verification-button1" class="btn btn-primary" disabled>Next</button>
          </div>
        </div>
        <div id="verification-step2" class="d-none">
          <div class="modal-body">
            <h5>STEP 2: Upload photos proving ownership of your card</h5>
            <p class="text-center">This is a required step in card verification procedure.</p>
            <h5 class="text-center pt-1">Selfie with Payment Card</h5>
            <input type="file" class="dropify" accept=".jpeg, .pdf, .gif" />
            <h5 class="pt-2">Photo requirements</h5>
            <ul>
              <li>Look straight at the camera.</li>
              <li>Background colour should be light and neutral.</li>
              <li>
                Photo of you should be in
                <strong>colour.</strong>
              </li>
              <li>
                Your face must be clearly
                <strong>visible</strong>. Please
                <strong>do not</strong> wear sunglasses, a hat, or a headband.
              </li>
              <li>Information in your document must be easily readable.</li>
              <li>In case of a low-quality photo or scan, the Compliance Officer may ask you to upload it again.</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" id="verification-button2" class="btn btn-success">Add card</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.modal-content -->
  </b-modal>
  <!-- /.modal-dialog -->
</template>

<script>
export default {
  name: "CreditCardModal"
};
</script>