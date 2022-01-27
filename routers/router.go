// @APIVersion 1.0.0
// @Title beego Test API
// @Description beego has a very cool tools to autogenerate documents for your API
// @Contact astaxie@gmail.com
// @TermsOfServiceUrl http://beego.me/
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"github.com/gnanakeethan/bitbackend/controllers"

	beego "github.com/beego/beego/v2/server/web"
)

func init() {
	ns := beego.NewNamespace("/v1",

		beego.NSNamespace("/person_allergy",
			beego.NSInclude(
				&controllers.PersonAllergyController{},
			),
		),

		beego.NSNamespace("/persons",
			beego.NSInclude(
				&controllers.PersonsController{},
			),
		),

		beego.NSNamespace("/person_organ_donation_complications",
			beego.NSInclude(
				&controllers.PersonOrganDonationComplicationsController{},
			),
		),

		beego.NSNamespace("/person_follow_ups",
			beego.NSInclude(
				&controllers.PersonFollowUpsController{},
			),
		),

		beego.NSNamespace("/person_organ_donation",
			beego.NSInclude(
				&controllers.PersonOrganDonationController{},
			),
		),

		beego.NSNamespace("/person_relations",
			beego.NSInclude(
				&controllers.PersonRelationsController{},
			),
		),

		beego.NSNamespace("/users",
			beego.NSInclude(
				&controllers.UsersController{},
			),
		),

		beego.NSNamespace("/person_suspensions",
			beego.NSInclude(
				&controllers.PersonSuspensionsController{},
			),
		),

		beego.NSNamespace("/examinations",
			beego.NSInclude(
				&controllers.ExaminationsController{},
			),
		),

		beego.NSNamespace("/person_follow_ups_examinations",
			beego.NSInclude(
				&controllers.PersonFollowUpsExaminationsController{},
			),
		),

		beego.NSNamespace("/allergies",
			beego.NSInclude(
				&controllers.AllergiesController{},
			),
		),

		beego.NSNamespace("/comorbidities",
			beego.NSInclude(
				&controllers.ComorbiditiesController{},
			),
		),

		beego.NSNamespace("/person_follow_ups_medicines",
			beego.NSInclude(
				&controllers.PersonFollowUpsMedicinesController{},
			),
		),

		beego.NSNamespace("/person_medical_history",
			beego.NSInclude(
				&controllers.PersonMedicalHistoryController{},
			),
		),

		beego.NSNamespace("/person_comorbidities",
			beego.NSInclude(
				&controllers.PersonComorbiditiesController{},
			),
		),

		beego.NSNamespace("/person_follow_ups_investigations",
			beego.NSInclude(
				&controllers.PersonFollowUpsInvestigationsController{},
			),
		),

		beego.NSNamespace("/workups",
			beego.NSInclude(
				&controllers.WorkupsController{},
			),
		),

		beego.NSNamespace("/person_workups",
			beego.NSInclude(
				&controllers.PersonWorkupsController{},
			),
		),

		beego.NSNamespace("/investigations",
			beego.NSInclude(
				&controllers.InvestigationsController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
