"use strict";

angular.module('app')
	.controller('CountryListController', function($scope, countryList) {

		$scope.countries = countryList.getCountryList();

});

angular.module('app')
.factory('countryList', function($http) {
    return {
		getCountryList: function() {
			var results = {};
			results = [
				// {name: 'Albania'},
				// {name: 'Algeria'},
				// {name: 'Angola'},
				// {name: 'Anguilla'},
				// {name: 'Antigua_and_Barbuda'},
				// {name: 'Argentina'},
				// {name: 'Armenia'},
				{name: 'Australia'},
				// {name: 'Austria'},
				// {name: 'Azerbaijan'},
				// {name: 'Bahamas'},
				// {name: 'Bahrain'},
				// {name: 'Barbados'},
				// {name: 'Belarus'},
				{name: 'Belgium'},
				// {name: 'Belize'},
				// {name: 'Benin'},
				// {name: 'Bermuda'},
				// {name: 'Bhutan'},
				// {name: 'Bolivia'},
				// {name: 'Botswana'},
				{name: 'Brazil'},
				// {name: 'British_Virgin_Islands'},
				// {name: 'Brunei'},
				// {name: 'Bulgaria'},
				// {name: 'Burkina_Faso'},
				// {name: 'Cambodia'},
				{name: 'Canada'},
				// {name: 'Cape_Verde'},
				// {name: 'Cayman_Islands'},
				// {name: 'Chad'},
				// {name: 'Chile'},
				{name: 'China'},
				// {name: 'Colombia'},
				// {name: 'Congo_Republic_of'},
				// {name: 'Costa_Rica'},
				// {name: 'Croatia'},
				// {name: 'Cyprus'},
				// {name: 'Czech_Republic'},
				// {name: 'Denmark'},
				// {name: 'Dominica'},
				// {name: 'Dominican_Republic'},
				// {name: 'Ecuador'},
				// {name: 'Egypt'},
				// {name: 'El_Salvador'},
				// {name: 'Estonia'},
				// {name: 'Fiji'},
				// {name: 'Finland'},
				{name: 'France'},
				// {name: 'Gambia'},
				{name: 'Germany'},
				// {name: 'Ghana'},
				// {name: 'Greece'},
				// {name: 'Grenada'},
				// {name: 'Guatemala'},
				// {name: 'Guinea_Bissau'},
				// {name: 'Guyana'},
				// {name: 'Honduras'},
				{name: 'Hong_Kong'},
				// {name: 'Hungary'},
				// {name: 'Iceland'},
				{name: 'India'},
				{name: 'Indonesia'},
				// {name: 'Ireland'},
				// {name: 'Israel'},
				// {name: 'Italy'},
				// {name: 'Jamaica'},
				{name: 'Japan'},
				// {name: 'Jordan'},
				// {name: 'Kazakhstan'},
				// {name: 'Kenya'},
				// {name: 'Kuwait'},
				// {name: 'Kyrgyzstan'},
				// {name: 'Laos'},
				// {name: 'Latvia'},
				// {name: 'Lebanon'},
				// {name: 'Liberia'},
				// {name: 'Lithuania'},
				// {name: 'Luxembourg'},
				// {name: 'Macao'},
				// {name: 'Macedonia'},
				// {name: 'Madagascar'},
				// {name: 'Malawi'},
				// {name: 'Malaysia'},
				// {name: 'Mali'},
				// {name: 'Malta'},
				// {name: 'Mauritania'},
				// {name: 'Mauritius'},
				// {name: 'Mexico'},
				// {name: 'Micronesia'},
				// {name: 'Moldova'},
				// {name: 'Mongolia'},
				// {name: 'Montserrat'},
				// {name: 'Mozambique'},
				// {name: 'Namibia'},
				// {name: 'Nepal'},
				{name: 'Netherlands'},
				// {name: 'New_Zealand'},
				// {name: 'Nicaragua'},
				// {name: 'Niger'},
				// {name: 'Nigeria'},
				// {name: 'Norway'},
				// {name: 'Oman'},
				// {name: 'Pakistan'},
				// {name: 'Palau'},
				// {name: 'Panama'},
				// {name: 'Papua_New_Guinea'},
				// {name: 'Paraguay'},
				// {name: 'Peru'},
				// {name: 'Philippines'},
				// {name: 'Poland'},
				{name: 'Portugal'},
				// {name: 'Qatar'},
				{name: 'Republic_of_Korea'},
				// {name: 'Romania'},
				// {name: 'Russia'},
				// {name: 'Saudi_Arabia'},
				// {name: 'Senegal'},
				// {name: 'Seychelles'},
				// {name: 'Sierra_Leone'},
				{name: 'Singapore'},
				// {name: 'Slovakia'},
				// {name: 'Slovenia'},
				// {name: 'Solomon_Islands'},
				// {name: 'South_Africa'},
				// {name: 'Spain'},
				{name: 'Sri_Lanka'},
				// {name: 'St_Kitts'},
				// {name: 'St_Lucia'},
				// {name: 'St_Vincent_and_the_Grenadines'},
				// {name: 'Suriname'},
				// {name: 'Swaziland'},
				// {name: 'Sweden'},
				// {name: 'Switzerland'},
				// {name: 'Taiwan'},
				// {name: 'Tajikistan'},
				// {name: 'Tanzania'},
				// {name: 'Thailand'},
				// {name: 'Trinidad_and_Tobago'},
				// {name: 'Tunisia'},
				// {name: 'Turkey'},
				// {name: 'Turkmenistan'},
				// {name: 'Turks_and_Caicos'},
				// {name: 'Uganda'},
				// {name: 'UK'},
				// {name: 'Ukraine'},
				// {name: 'United_Arab_Emirates'},
				// {name: 'Uruguay'},
				{name: 'USA'},
				// {name: 'Uzbekistan'},
				// {name: 'Venezuela'},
				// {name: 'Vietnam'},
				// {name: 'Yemen'},
				{name: 'Zimbabwe'}
			];
			return results;
        }
    }
});
