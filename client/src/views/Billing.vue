<template>
  <div>
    <div class="row">
      <AccountBalance :balance="13.56"/>
      <Recharge/>
      <AutoRecharge/>
    </div> <!-- end row -->

    <div class="row">
      <CreditCards/>
      <div class="col-md-5 col-lg-4">
        <div id="transactions-primary" class="card-box">
          <h4 class="header-title mb-2">Transactions - Primary card</h4>
          <div class="table-responsive">
            <table class="table table-striped table-sp mb-0">
              <thead>
                <tr class="tbl-b no-border">
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Charged</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23rd July - 11:50 PM</td>
                  <td>25.00</td>
                  <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                  </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
                <tr>
                    <td>23rd July - 11:50 PM</td>
                    <td>25.00</td>
                    <td>FAIL</td>
                </tr>
              </tbody>
            </table>
          </div><!-- table -->
        </div><!-- card-box -->
      </div> <!-- col-->
    </div>
  </div>
</template>

<script>
import AccountBalance from '../components/Billing/AccountBalance'
import Recharge from '../components/Billing/Recharge'
import AutoRecharge from '../components/Billing/AutoRecharge'
import CreditCards from '../components/Billing/CreditCards'

export default {
    components: {
      AccountBalance,
      Recharge,
      AutoRecharge,
      CreditCards
    },
    data: () => ({
        errorMsg: ''
    }),
    methods: {
    }
}
</script>
