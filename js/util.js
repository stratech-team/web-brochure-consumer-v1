function navbar_remove_all_active() {
  $('#content_navbar li').each(function() {
    $("#"+this.id).removeClass("active");
  });
}

function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}



function startTime() {
  document.getElementById('time').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + moment().format('HH:mm:ss');
  t = setTimeout(function () {
      startTime();
  }, 500);
}
//startTime();

function gen_http($http, success_code, req_obj, error_funct, success_funct){
  var mypromise =  $http(req_obj);
  mypromise.success(function(data, status, headers, config) {
      if (status == success_code) {
          success_funct(data, status);
      } else {
          error_funct(data, status);
      }
  });
  mypromise.error(function(data, status, headers, config) {
    error_funct(data, status);
  });
};

function isEmailAddress(str) {
  var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!pattern.test(str)) {
    return false;
  };
  return true;
};


function startTime2() {
  document.getElementById('time2').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + moment().format('DD MMM YYYY');
  t = setTimeout(function () {
      startTime();
  }, 500);
}
//startTime2();

function gen_http($http, success_code, req_obj, error_funct, success_funct){
  var mypromise =  $http(req_obj);
  mypromise.success(function(data, status, headers, config) {
      if (status == success_code) {
          success_funct(data, status);
      } else {
          error_funct(data, status);
      }
  });
  mypromise.error(function(data, status, headers, config) {
    error_funct(data, status);
  });
};
function gen_http_error(data, status){
  if(!data){
    alert('Status: ' + (status ? status : ''));
  } else if (data.message) {
    alert((status ? status : '') + ' ' + data.message);
  } else {
    alert((status ? status : '') + ' Server call error');
    console.error(data);
  }
};


  function calc_date(year, month, day, assign_dob, assign_age){
    if (!year || !month || !day) {
      assign_dob('');
      assign_age(0);
      return;
    }
    if (year == 'Year' || month == 'Month' || day == 'Day') {
      assign_dob('');
      assign_age(0);
      return;
    }
    var mdob = moment(year + '-' + month + '-' + day, "YYYY-MM-DD");
    if (!mdob.isValid()) {
      assign_dob('');
      assign_age(0);
      return;
    }
    assign_dob(mdob.format("YYYY-MM-DD"));
    assign_age(calc_moment_age(mdob));
  }

  function calc_moment_age(dob) {
    var today = moment();
    var age = today.year() - dob.year();
    if (today.month() < dob.month()) {
      age = age - 1;
      return age;
    }
    if ((today.month() == dob.month()) && (today.date() < dob.date())) {
      age = age - 1;
      return age;
    }
    return age;
  }

  function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
  }

