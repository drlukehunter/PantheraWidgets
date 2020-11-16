//console.log("setImages.js  panwidgts 17-05-20 13:32");
function setCanvas(targetID, imgSrc) {
  console.log('setCanvas : ' + targetID + ' 04-06-2020 09:29');
  console.log('targetID : ' + targetID);
  let imgId = '';

  if (targetID === 'pttrn_rcgntn_orgnl_imgs_1' || targetID === 'pttrn_rcgntn_orgnl_imgs_2') {
    imgId = 'currnt-img_' + targetID.substring(13, targetID.length);
  } else {
    imgId = 'currnt-img_' + targetID.substring(14, targetID.length);
  }

  // the target div already exist
  if ($('#' + targetID + ' img').length) {
    $('#' + targetID + ' img').attr('src', imgSrc);
    //console.log("img exist : ");
  } else {

    if (targetID === 'pttrn_rcgntn_orgnl_imgs_1' || targetID === 'pttrn_rcgntn_orgnl_imgs_2') {

      $('#' + targetID).css('text-align', 'center');
      //$('#spcs_idntfctn_id_rf_2').css('text-align','center');

      $('#' + targetID).prepend($('<img>', {
        id: imgId,
        src: imgSrc,
        alt: 'camtrap',
        width: '100%',
        height: 'auto'
      }));
      $('#' + imgId).css({
        'maxHeight': '100%',
        'maxWidth': '100%'
      });

    } else if (targetID.substring(0, 16) === "pchrcm_alrts_id_") {
      $('#' + targetID).css('text-align', 'center');
      console.log('case pchrcm_alrts_id_');
      $('#' + targetID).prepend($('<img>', {
        id: imgId,
        src: imgSrc,
        alt: 'poachercam',
        width: '100%',
        height: 'auto'
      }));
      $('#' + imgId).css({
        'object-fit': 'cover',
        'maxWidth': '100%',
        'max-height': '100%'
      });
    } else {
      $('#' + targetID).css('text-align', 'center');
      //$('#spcs_idntfctn_id_rf_2').css('text-align','center');
      $('#' + targetID).prepend($('<img>', {
        id: imgId,
        src: imgSrc,
        alt: 'camtrap',
        width: '100%',
        height: 'auto'
      }));
      $('#' + imgId).css({
        'maxHeight': '500px',
        'maxWidth': '100%'
      });
      $('#currnt-img_id_rf_2').click(function () {
        //console.log('clicked currnt-img_id_rf_2');
        $('#spcs_idntfctn_id_rf_2').focus();
      });

      $('#currnt-img_id_rf_1').click(function () {
        //console.log('clicked img_id_rf_1');
        $('#spcs_idntfctn_id_rf_1').focus();
      });
    }

    wheelzoom(document.querySelector("#" + imgId));
    //$("#"+imgId).imgViewer();

  }
}