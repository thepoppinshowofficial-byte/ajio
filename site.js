const AFFILIATE_LINKS = {
  renttherunway:
    "https://admin.rewardoo.com/track/783cR4e_auZN00QDaj3VMtyvcTKT3BUJhWFsxsPWauzhrqzQ2wsdN1yjii8D_aO2AkkRkgZtVepRBJ_aA_c_c?source=inner&url=https%3A%2F%2Fwww.renttherunway.com%2F",

  bauzaar:
    "https://admin.rewardoo.com/track/4780Wiq5GG_bYrD0cmmTH5WkALmVlvRkXxvxMnLKlofLvUSLwQubfvSCtz_acA82vaV3l42e7iLhkp?source=inner&url=https%3A%2F%2Fwww.bauzaar.it%2F",

  planttherapy:
    "https://admin.rewardoo.com/track/7684PK9KSyx1A0SmKdeLiNL5lsEU4f9kQs2wjOLbXJX_btLzMi4vKHqB_aO8Voq_aHOn7GnA5Kkvp_anH15LvUg_c?source=inner&url=https%3A%2F%2Fwww.planttherapy.com%2F",

  bexley:
    "https://admin.rewardoo.com/track/a2c8D9aT2_baNgMl2yiVBytK_aoKyWEs1lxSGw1iOqB6zKNfIMDH9DzShaflGzMEKhpOw8_bOrMQlw_c?source=inner&url=https%3A%2F%2Fwww.bexley.fr%2F",

  hudebeauty:
    "https://admin.rewardoo.com/track/d255vn9y3OUYzMcypWv2SdXE6Kxcs94LFx_aFhvRft5DIXZj0TzXyZ52Y1RgMnY8tI_aWOm4tupE3u?source=inner&url=https%3A%2F%2Fhudabeauty.com%2Fus%2Fen_us%2Fhome",

  favoritedaughter:
    "https://admin.rewardoo.com/track/07d8HLJYn2v5qC7tLWhjon2PZ4024LbcYvoV_aEi1CT0tXCbVf1rSC5WbuGYppRJy88_b8z7cl7p7Wfn_b7CdVnwg_c_c?source=inner&url=https%3A%2F%2Fshopfavoritedaughter.com",

  unicehair:
    "https://admin.rewardoo.com/track/bb05ahctjsGgG3oMnVZPoBZgIxlBh3h_bJr643gZpfbBeQiTPv54j4MaiyJQLKHqI6odf0ttg9uit?source=inner&url=https%3A%2F%2Fm.unice.com"
};


/* =========================================
   AFFILIATE BUTTON HANDLER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("[data-affiliate]");

  buttons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      event.preventDefault();

      const brand = button.getAttribute("data-affiliate");

      const affiliateURL = AFFILIATE_LINKS[brand];

      if (!affiliateURL) {

        console.error(
          "Affiliate URL not found for:",
          brand
        );

        return;
      }

      /*
        Open affiliate URL in the same tab.
        This is the most reliable method for
        Rewardoo tracking links.
      */

      window.location.href = affiliateURL;

    });

  });

});
