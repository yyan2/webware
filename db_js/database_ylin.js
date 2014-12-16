/**
 * Created by LinYichen on 12/9/14.
 */


exports.constructInputQuery = function(fields, fileName) {
    var sql =
        'INSERT INTO pet_info ' +
        '(pet_name, pet_type, pet_color, pet_age, pet_gender, pet_ownerName, ' +
        'pet_ownerLocation, pet_ownerContactInfo, pet_pictureURL) ' +
        "VALUES ('" + fields.petName +"', '"  + fields.petType + "', '" + fields.petColor + "', '" + fields.petAge
        + "', '" +fields.selection + "', '" +fields.ownerName + "', '" +
        fields.ownerLocation + "', '" +fields.ownerContactInfo + "', '" +fileName + "'); ";
    return sql;

};

