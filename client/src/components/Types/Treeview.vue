<template>
  <div class="treeview-animated w-100">
    <ul id="call-type-list" class="treeview-animated-list mb-3">
      <li class="treeview-animated-items">
        <a class="closed">
          <i class="fas fa-caret-right mr-1 color"></i>
          <span>New sales enquiry</span>
        </a>
        <span class="call-rule-buttons">
          <i
            class="fas add-rule-btn fa-plus"
            data-toggle="modal"
            data-target=".add-new-rule"
            data-backdrop="static"
            data-keyboard="false"
            @click="showRuleModal"
          ></i>
          <i
            class="fas delete-type-btn fa-trash"
            data-toggle="modal"
            data-target=".delete-type"
            data-backdrop="static"
            data-keyboard="false"
            @click="showDeleteRuleModal"
          ></i>
        </span>
        <ul class="nested">
          <li class="treeview-animated-element">
            <span class="call-rule">Virtual reception services</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">Can you help me sing up for a paid account?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How much are your plans and packages?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How can I get a free trial of the service?</span>
          </li>
        </ul>
      </li>
      <li class="treeview-animated-items">
        <a class="closed">
          <i class="fas fa-caret-right mr-1 color"></i>
          <span>Accounts payable/Receivable</span>
        </a>
        <span class="call-rule-buttons">
          <i
            class="fas add-rule-btn fa-plus"
            data-toggle="modal"
            data-target=".add-new-rule"
            data-backdrop="static"
            data-keyboard="false"
            @click="showRuleModal"
          ></i>
          <i
            class="fas delete-type-btn fa-trash"
            data-toggle="modal"
            data-target=".delete-type"
            data-backdrop="static"
            data-keyboard="false"
            @click="showDeleteRuleModal"
          ></i>
        </span>
        <ul class="nested">
          <li class="treeview-animated-element">
            <span class="call-rule">How to update my credit card details?</span>
          </li>
          <li class="treeview-animated-element">
            <span
              class="call-rule"
            >There is a mistake or issue with my account or invoice, can you help?</span>
          </li>
        </ul>
      </li>
      <li class="treeview-animated-items">
        <a class="closed">
          <i class="fas fa-caret-right mr-1"></i>
          <span>Existing clients</span>
        </a>
        <span class="call-rule-buttons">
          <i
            class="fas add-rule-btn fa-plus"
            data-toggle="modal"
            data-target=".add-new-rule"
            data-backdrop="static"
            data-keyboard="false"
            @click="showRuleModal"
          ></i>
          <i
            class="fas delete-type-btn fa-trash"
            data-toggle="modal"
            data-target=".delete-type"
            data-backdrop="static"
            data-keyboard="false"
            @click="showDeleteRuleModal"
          ></i>
        </span>
        <ul class="nested">
          <li class="treeview-animated-element">
            <span class="call-rule">Can I speak to my account manager?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How do I update my call instructions?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How do I fix an issue with my account?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">Integrations and features</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">Technical support issues</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">Update account details</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How do I make a complaint?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How do I close my account?</span>
          </li>
        </ul>
      </li>
      <li class="treeview-animated-items">
        <a class="closed">
          <i class="fas fa-caret-right mr-1 color-green"></i>
          <span>Telemarketing/Cold calls</span>
        </a>
        <span class="call-rule-buttons">
          <i
            class="fas add-rule-btn fa-plus"
            data-toggle="modal"
            data-target=".add-new-rule"
            data-backdrop="static"
            data-keyboard="false"
            @click="showRuleModal"
          ></i>
          <i
            class="fas delete-type-btn fa-trash"
            data-toggle="modal"
            data-target=".delete-type"
            data-backdrop="static"
            data-keyboard="false"
            @click="showDeleteRuleModal"
          ></i>
        </span>
        <ul class="nested">
          <li class="treeview-animated-element">
            <span class="call-rule">Can I speak to the owner of the business?</span>
          </li>
        </ul>
      </li>
      <li class="treeview-animated-items">
        <a class="closed">
          <i class="fas fa-caret-right mr-1 color"></i>
          <span>Employment enquiries</span>
        </a>
        <span class="call-rule-buttons">
          <i
            class="fas add-rule-btn fa-plus"
            data-toggle="modal"
            data-target=".add-new-rule"
            data-backdrop="static"
            data-keyboard="false"
            @click="showRuleModal"
          ></i>
          <i
            class="fas delete-type-btn fa-trash"
            data-toggle="modal"
            data-target=".delete-type"
            data-backdrop="static"
            data-keyboard="false"
            @click="showDeleteRuleModal"
          ></i>
        </span>
        <ul class="nested">
          <li class="treeview-animated-element">
            <span class="call-rule">Can I verify someone's employment?</span>
          </li>
          <li class="treeview-animated-element">
            <span class="call-rule">How can I apply for a job?</span>
          </li>
        </ul>
      </li>
    </ul>
    <!-- treeview animated -->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Treeview",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "New sales enquiry",
          children: [
            { id: 2, name: "Calendar : app" },
            { id: 3, name: "Chrome : app" },
            { id: 4, name: "Webstorm : app" }
          ]
        }
      ]
    };
  },
  methods: {
      showRuleModal() {
          this.$emit('showRuleModal');
      },
      showDeleteRuleModal() {
          this.$emit('showDeleteRuleModal');
      }
  },
  mounted() {
    $.fn.mdbTreeview = function() {
      var $this = $(this);

      if ($this.hasClass("treeview")) {
        var $toggler = $this.find(".rotate");
        $.each($toggler, function(e) {
          $($toggler[e]).off("click");
          $($toggler[e]).on("click", function() {
            var $this = $(this);
            $this.siblings(".nested").toggleClass("active");
            $this.toggleClass("down");
          });
        });
      }

      if ($this.hasClass("treeview-animated")) {
        var $elements = $this.find(".treeview-animated-element");
        var $closed = $this.find(".closed");
        $this.find(".nested").hide();
        $closed.off("click");
        $closed.on("click", function() {
          var $this = $(this);
          var $target = $this.siblings(".nested");
          var $pointer = $this.children(".fa-caret-right");
          $this.toggleClass("open");
          $pointer.toggleClass("down");
          !$target.hasClass("active")
            ? $target.addClass("active").slideDown()
            : $target.removeClass("active").slideUp();
          return false;
        });
        $elements.off("click");
        $elements.on("click", function() {
          var $this = $(this);
          $this.hasClass("opened")
            ? $this.removeClass("opened")
            : ($elements.removeClass("opened"), $this.addClass("opened"));
        });
      }

      if ($this.hasClass("treeview-colorful")) {
        var _$elements = $this.find(".treeview-colorful-element");

        var $header = $this.find(".treeview-colorful-items-header");
        $this.find(".nested").hide();
        $header.off("click");
        $header.on("click", function() {
          var $this = $(this);
          var $target = $this.siblings(".nested");
          var $pointerPlus = $this.children(".fa-plus-circle");
          var $pointerMinus = $this.children(".fa-minus-circle");
          $this.toggleClass("open");
          $pointerPlus.removeClass("fa-plus-circle");
          $pointerPlus.addClass("fa-minus-circle");
          $pointerMinus.removeClass("fa-minus-circle");
          $pointerMinus.addClass("fa-plus-circle");
          !$target.hasClass("active")
            ? $target.addClass("active").slideDown()
            : $target.removeClass("active").slideUp();
        });

        _$elements.off("click");

        _$elements.on("click", function() {
          var $this = $(this);
          $this.hasClass("opened")
            ? _$elements.removeClass("opened")
            : (_$elements.removeClass("opened"), $this.addClass("opened"));
        });
      }
    };

    $(".treeview-animated").mdbTreeview();

    $("#create-type-btn").click(function() {
      var $list;
      $list = $(".treeview-animated-list");
      var type_name = $("#call-type-name:text").val();
      $list.append(
        '<li class="treeview-animated-items"><a class="closed"><i class="fas fa-caret-right mr-2 test"></i><span>' +
          type_name +
          '</span></a><ul class="nested"><li class="treeview-animated-element"><span class="call-rule">New call rule</span></li></ul></li>'
      );
      $(".treeview-animated").mdbTreeview();
      $(".add-new-type").modal("hide");
      $("#call-type-name").val("");
    });

    $(".add-rule-btn").click(function() {
      var $list;
      $list = $(this)
        .parent()
        .next();
      $collapsed = $(this)
        .parent()
        .prev();
      $("#create-rule-btn").click(function() {
        var rule_name = $("#call-rule-name:text").val();
        $list.append(
          '<li class="treeview-animated-element"><span class="call-rule">' +
            rule_name +
            "</span></li>"
        );
        $(".treeview-animated").mdbTreeview();
        $(".add-new-rule").modal("hide");
        $("#call-rule-name").val("");
      });
    });

    $(".delete-type-btn").click(function() {
      var grandparent = $(this)
        .parent()
        .parent();
      $("#delete-type-btn").click(function() {
        grandparent.remove();
        $(".delete-type").modal("hide");
      });
    });

    var n = $(".assign-user").length;
    if (n < 4) {
      $(".assign-user").css("flex", "0 0 auto");
    }

    $(".delete-user-btn").click(function() {
      var parent = $(this).parent();
      parent.remove();
      var n = $(".assign-user").length;
      if (n < 3) {
        $(".assign-user").css("flex", "0 0 auto");
      }
    });
  }
};
</script>