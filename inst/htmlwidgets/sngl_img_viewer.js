HTMLWidgets.widget({

  name: 'sngl_img_viewer',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        console.log("sngl_img_viewer.js  11-05-20");
        
        let spcs_idntfctns_scndry_img = new viewerClass(
                                            "spcs_idntfctn_id_rf_2",
                                            "img_idntfctn_scndry.csv"),
                spcs_idntfctns_prmry_img = new viewerClass(
                                            "spcs_idntfctn_id_rf_1",
                                            "img_idntfctn_prmry.csv"),
                pttrn_rcgntn_vw_orgnls_1 = new viewerClass(
                                        "pttrn_rcgntn_orgnl_imgs_1",
                                        "pttrn_rcgntn_fltrd_rslts_prmry.csv"),
                pttrn_rcgntn_vw_orgnls_2 = new viewerClass(
                                        "pttrn_rcgntn_orgnl_imgs_2",
                                        "pttrn_rcgntn_fltrd_rslts_scndry.csv");

        // Handle extract images buttons 
        Shiny.addCustomMessageHandler("spcs_idntfctn_extrt_id_button_rf_1",
                function(mesg) {

                  spcs_idntfctns_prmry_img.restart();
                  spcs_idntfctns_prmry_img.fetchServerData("img_idntfctn_prmry.csv");
                }
        );

         Shiny.addCustomMessageHandler("spcs_idntfctn_extrt_id_button_rf_2",
                function(mesg) {
                  spcs_idntfctns_scndry_img.restart();
                  spcs_idntfctns_scndry_img.fetchServerData("img_idntfctn_scndry.csv");
                }
        );

        /*/////////////////////////////////////////////////////////////////////////////*/
        // original imgs vwers
        Shiny.addCustomMessageHandler("pttrn_rcgntn_vw_orgnls_button",
                function(mesg) {
                        console.log('clicked pttrn_rcgntn_vw_orgnls_button');
                        pttrn_rcgntn_vw_orgnls_1.restart();
                        pttrn_rcgntn_vw_orgnls_1.fetchServerData("pttrn_rcgntn_fltrd_rslts_prmry.csv");

                        setTimeout(() => { 
                                console.log('fetching secondary');
                                pttrn_rcgntn_vw_orgnls_2.restart();
                                pttrn_rcgntn_vw_orgnls_2.fetchServerData("pttrn_rcgntn_fltrd_rslts_scndry.csv");
                        },9000)
                        
                }
        );

       /* Shiny.addCustomMessageHandler("pttrn_rcgntn_vw_orgnls_button",
                function(mesg) {
                        pttrn_rcgntn_vw_orgnls_2.restart();
                        pttrn_rcgntn_vw_orgnls_2.fetchServerData("pttrn_rcgntn_fltrd_rslts_prmry.csv");
                }
        );*/
        /*/////////////////////////////////////////////////////////////////////////////*/



        // Handle previous image buttons
        Shiny.addCustomMessageHandler("spcs_idntfctn_prev_button_rf_1",
                function(mesg) {
                   spcs_idntfctns_prmry_img.prev();
                }
        );
        Shiny.addCustomMessageHandler("spcs_idntfctn_prev_button_rf_2",
                function(mesg) {
                    spcs_idntfctns_scndry_img.prev();
                }
        );

        /*/////////////////////////////////////////////////////////////////////////////*/

        Shiny.addCustomMessageHandler("pttrn_rcgntn_orgnl_imgs_prev_button_prmry",
                function(mesg) {
                        consome.log('pttrn_rcgntn_orgnl_imgs_prev_button_prmry');
                        pttrn_rcgntn_vw_orgnls_1.prev();
                }
        );
        Shiny.addCustomMessageHandler("pttrn_rcgntn_orgnl_imgs_prev_button_scndry",
                function(mesg) {
                        consome.log('pttrn_rcgntn_orgnl_imgs_prev_button_scndry');
                        pttrn_rcgntn_vw_orgnls_2.prev();
                }
        );

        /*/////////////////////////////////////////////////////////////////////////////*/



        // Hanle reset buttons
        Shiny.addCustomMessageHandler("spcs_idntfctn_reset_button_rf_1",
                function(mesg) {
                   spcs_idntfctns_prmry_img.reset();

                }
        );
        Shiny.addCustomMessageHandler("spcs_idntfctn_reset_button_rf_2",
                function(mesg) {
                     spcs_idntfctns_scndry_img.reset();

                }
        );

        /*/////////////////////////////////////////////////////////////////////////////*/

        Shiny.addCustomMessageHandler("pttrn_rcgntn_orgnl_imgs_reset_button_prmry",
                function(mesg) {
                        consome.log('pttrn_rcgntn_orgnl_imgs_reset_button_prmry');
                        pttrn_rcgntn_vw_orgnls_1.reset();

                }
        );
        Shiny.addCustomMessageHandler("pttrn_rcgntn_orgnl_imgs_reset_button_scndry",
                function(mesg) {
                        consome.log('pttrn_rcgntn_orgnl_imgs_reset_button_scndry');
                        pttrn_rcgntn_vw_orgnls_2.reset();

                }
        );

        /*/////////////////////////////////////////////////////////////////////////////*/

        // Hamdle next image buttons
        Shiny.addCustomMessageHandler("spcs_idntfctn_next_button_rf_1",
                function(mesg) {
                   spcs_idntfctns_prmry_img.next();

                }
        );
        Shiny.addCustomMessageHandler("spcs_idntfctn_next_button_rf_2",
                function(mesg) {
                   spcs_idntfctns_scndry_img.next();

                }
        );

        /*/////////////////////////////////////////////////////////////////////////////*/

        Shiny.addCustomMessageHandler("pttrn_rcgntn_orgnl_imgs_next_button_prmry",
                function(mesg) {
                        consome.log('pttrn_rcgntn_orgnl_imgs_next_button_prmry');
                        pttrn_rcgntn_vw_orgnls_1.next();

                }
        );
        Shiny.addCustomMessageHandler("pttrn_rcgntn_orgnl_imgs_next_button_scndry",
                function(mesg) {
                        consome.log('pttrn_rcgntn_orgnl_imgs_next_button_scndry');
                        pttrn_rcgntn_vw_orgnls_2.next();

                }
        );
        /*/////////////////////////////////////////////////////////////////////////////*/

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
