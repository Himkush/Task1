import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../shared/data-storage.service';
import {FormModel} from '../shared/model/form.model';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
export interface Qualification {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  stateGroupOptions: Observable<Qualification[]>;
  qualificationGroup: Qualification[] = [{
    letter: 'A',
    names: ['Advanced diploma in Dredging technology', 'Appreciation Programme on Citizen Journalism']
  }, {
    letter: 'B',
    names: ['Bachelor in Hotel Management', 'Bachelor of Architecture', 'Bachelor of Architecture Interior Design',
      'Bachelor of Arts & Bachelor of Law', 'Bachelor of Arts (General)', 'Bachelor of Arts Acient Indian Culture',
      'Bachelor of Arts Arabic (Honors)', 'Bachelor of Arts Bengali (Honors)', 'Bachelor of Arts Business Economics (Honors)',
      'Bachelor of Arts Economics', 'Bachelor of Arts Economics (Honors)', 'Bachelor of Arts Education', 'Bachelor of Arts English',
      'Bachelor of Arts English (Honors)', 'Bachelor of Arts Folklore', 'Bachelor of Arts Geography', 'Bachelor of Arts Geography (Honors)',
      'Bachelor of Arts Gujarati', 'Bachelor of Arts Hindi', 'Bachelor of Arts Hindi (Honors)',
      'Bachelor of Arts Hindi Patrakarita Evam Jansanchar (Honors)', 'Bachelor of Arts History', 'Bachelor of Arts History (Honors)',
      'Bachelor of Arts Home Science (Honors)', 'Bachelor of Arts International Hospitality Administration', 'Bachelor of Arts Journalism',
      'Bachelor of Arts Marathi', 'Bachelor of Arts Mathematics (Honors)', 'Bachelor of Arts Music (Honors)',
      'Bachelor of Arts Persian (Honors)', 'Bachelor of Arts Philosophy', 'Bachelor of Arts Philosophy (Honors)',
      'Bachelor of Arts Political Science (Honors)', 'Bachelor of Arts Politics', 'Bachelor of Arts Prayojan Mulak Hindi',
      'Bachelor of Arts Psychology', 'Bachelor of Arts Psychology (Honors)', 'Bachelor of Arts Public Service',
      'Bachelor of Arts Punjabi (Honors)', 'Bachelor of Arts Sanskrit', 'Bachelor of Arts Sanskrit (Honors)',
      'Bachelor of Arts Social Work (Honors)', 'Bachelor of Arts Sociology',
      'Bachelor of Arts Sociology (Honors)', 'Bachelor of Arts Tamil', 'Bachelor of Arts Urdu (Honors)',
      'Bachelor of Arts Vocational Studies', 'Bachelor of Arts Vyavaharik and Upyojit Marathi',
      'Bachelor of Audiology and Speech Language Pathology', 'Bachelor of Ayurvedic Medicine & Surgery',
      'Bachelor of Business Administration (Foreign Trade)', 'Bachelor of Business Administration (Hospitality Managment)',
      'Bachelor of Business Administration (Hospitality Managment/Tourist & Travel Management)',
      'Bachelor of Business Administration (Information Systems Management)',
      'Bachelor of Business Administration (Information Technology Management)',
      'Bachelor of Business Administration (Shipping)', 'Bachelor of Business Administration Hotel & Tourism Management',
      'Bachelor of Business Administration Insurance & Banking', 'Bachelor of Business Adminsitration', 'Bachelor of Business Management',
      'Bachelor of Business Studies', 'Bachelor of Commerce (General)', 'Bachelor of Commerce (Honors)',
      'Bachelor of Commerce (Professional)', 'Bachelor of Commerce Accountancy', 'Bachelor of Commerce Accounting and Finance',
      'Bachelor of Commerce Banking & Insurance', 'Bachelor of Commerce Banking and Finance', 'Bachelor of Commerce Business Economics',
      'Bachelor of Commerce Corporate Law', 'Bachelor of Commerce Economics', 'Bachelor of Commerce Environmental Science',
      'Bachelor of Commerce Financial Markets', 'Bachelor of Commerce Vocational', 'Bachelor of Computer Application',
      'Bachelor of Dental Surgery', 'Bachelor of Education', 'Bachelor of Education (English)',
      'Bachelor of Education Hearing Impairment', 'Bachelor of Education Vacational', 'Bachelor of Elementary Education',
      'Bachelor of Engieering Petroleum Engineering and Offshore Engineering', 'Bachelor of Engineering Aeronautical Engineering',
      'Bachelor of Engineering Automobile Engineering', 'Bachelor of Engineering Biomedical Engineering',
      'Bachelor of Engineering Biotechnology', 'Bachelor of Engineering Chemical Engineering',
      'Bachelor of Engineering Civil Engineering', 'Bachelor of Engineering Computer Engineering',
      'Bachelor of Engineering Electrical & Electronics Engineering',
      'Bachelor of Engineering Electrical & Electronics Engineering (Marine)',
      'Bachelor of Engineering Electrical Engineering', 'Bachelor of Engineering Electronics & Instrumentation Engineering',
      'Bachelor of Engineering Electronics and Telecommunication Engineering', 'Bachelor of Engineering Electronics Engineering',
      'Bachelor of Engineering Harbour & Ocean Engineering', 'Bachelor of Engineering Humanities and Applied Sciences',
      'Bachelor of Engineering Industrial Engineering', 'Bachelor of Engineering Information Technology',
      'Bachelor of Engineering Instrumentation & Control Engineering', 'Bachelor of Engineering Instrumentation Engineering',
      'Bachelor of Engineering Manufacturing Processes & Automation Engineering', 'Bachelor of Engineering Marine Engineering',
      'Bachelor of Engineering Mechanical Engineering', 'Bachelor of Engineering Naval Architecture and Offshore Engineering',
      'Bachelor of Engineering Production Engineering', 'Bachelor of Financial & Investment Analysis',
      'Bachelor of Fine Art (Applied Art)', 'Bachelor of Fine Art (Art History)', 'Bachelor of Fine Art (General)',
      'Bachelor of Fine Art (Painting)', 'Bachelor of Fine Art (Print Making)', 'Bachelor of Fine Art (Sculpture)',
      'Bachelor of Fine Art (Visual Communication)', 'Bachelor of Home Science',
      'Bachelor of Home Science Apparel Production & Management', 'Bachelor of Home Science Journalism & Mass Communication',
      'Bachelor of Home Science Organization & Management of Early Childhood Programmes', 'Bachelor of Homoeopathic Medicine & Surgery',
      'Bachelor of Journalism & Mass Communication (Honors)', 'Bachelor of Law', 'Bachelor of Law & Master of Law',
      'Bachelor of Law (General)', 'Bachelor of Law (Special))', 'Bachelor of Legal Science and Bachelor of Law',
      'Bachelor of Library Science',
      'Bachelor of Management Studies', 'Bachelor of Management Studies (Honors)', 'Bachelor of Mass Media',
      'Bachelor of Medicine & Bachelor of Surgery', 'Bachelor of Optometry', 'Bachelor of Performing Arts (Dance)',
      'Bachelor of Performing Arts (Music)', 'Bachelor of Pharmacy', 'Bachelor of Physical Education', 'Bachelor of Physiotherapy',
      'Bachelor of Science (Agriculture Biotechnology)', 'Bachelor of Science (General)',
      'Bachelor of Science (Medical Technology) Radiology', 'Bachelor of Science Agriculture',
      'Bachelor of Science Agrilcultural Marketing & Business Management',
      'Bachelor of Science Anthropology (Honors)', 'Bachelor of Science Aviation', 'Bachelor of Science Biochemistry',
      'Bachelor of Science Biochemistry (Honors)', 'Bachelor of Science Biological Sciences (Honors)',
      'Bachelor of Science Biomedical Sciences (Honors)', 'Bachelor of Science Biotechnology', 'Bachelor of Science Botany',
      'Bachelor of Science Botany (Honors)', 'Bachelor of Science Chemistry', 'Bachelor of Science Chemistry (Honors)',
      'Bachelor of Science Commercial Agriculture & Business Management', 'Bachelor of Science Computer Science',
      'Bachelor of Science Enviormental Sciences', 'Bachelor of Science Fashion & Apparel Designing',
      'Bachelor of Science Fashion Design', 'Bachelor of Science Fashion Technology', 'Bachelor of Science Fisheries',
      'Bachelor of Science Food Technology', 'Bachelor of Science Forensic Science', 'Bachelor of Science Forestry',
      'Bachelor of Science Genetics', 'Bachelor of Science Geology (Honors)', 'Bachelor of Science Home Science',
      'Bachelor of Science Home Science Interior Design', 'Bachelor of Science Home Science Nutrition & Dietetics',
      'Bachelor of Science Horticulture', 'Bachelor of Science Hotel Management and Catering Technology',
      'Bachelor of Science Hotel Management and Tourism', 'Bachelor of Science Information Technology',
      'Bachelor of Science Interior Design', 'Bachelor of Science Life Science', 'Bachelor of Science Mathematics',
      'Bachelor of Science Mathematics (Honors)', 'Bachelor of Science Medical Laboratory Technology',
      'Bachelor of Science Medical Technology', 'Bachelor of Science Microbiology', 'Bachelor of Science Microbiology (Honors)',
      'Bachelor of Science Nautical Science', 'Bachelor of Science Nursing (Honors)', 'Bachelor of Science Nursing (Post Basic)',
      'Bachelor of Science Nursing (Post Basic) (Distance Education)', 'Bachelor of Science Occupational Therapy',
      'Bachelor of Science Physcial Sciences (Honors)', 'Bachelor of Science Physical Education, Health Education and Sports (Hons)',
      'Bachelor of Science Physics', 'Bachelor of Science Physics (Honors)', 'Bachelor of Science Plant Biotechnology',
      'Bachelor of Science Statistics', 'Bachelor of Science Statistics (Honors)', 'Bachelor of Science Visual Communication',
      'Bachelor of Science Zoology', 'Bachelor of Science Zoology (Honors)', 'Bachelor of Social Work',
      'Bachelor of Socio Legal Sciences', 'Bachelor of Technology (Food Science)',
      'Bachelor of Technology Agriculture Engineering', 'Bachelor of Technology Chemical Engineering',
      'Bachelor of Technology Civil Engineering', 'Bachelor of Technology Computer Science',
      'Bachelor of Technology Computer Science and Engineering',
      'Bachelor of Technology Computer Science Engineering',
      'Bachelor of Technology Electrical and Electronics Engineering',
      'Bachelor of Technology Electronics', 'Bachelor of Technology Electronics & Communication Engineering',
      'Bachelor of Technology Food Technology', 'Bachelor of Technology Industrial Biotechnology',
      'Bachelor of Technology Information & Communication Technology', 'Bachelor of Technology Information Technology',
      'Bachelor of Technology Instrumentation', 'Bachelor of Technology Manufacturing Technology',
      'Bachelor of Technology Marine Engineering', 'Bachelor of Technology Mechanical Engineering',
      'Bachelor of Technology Petroleum Engineering', 'Bachelor of Technology PlasticsTechnology',
      'Bachelor of Technology Polymer Science', 'Bachelor of Technology Psychological Science',
      'Bachelor of Unani Medicine and Surgery', 'Bachelor of Veterinary Science and Animal Husbandry',
      'Bachelor of Visual Arts (Applied Art)', 'Bachelor of Visual Arts (Painting)', 'Bachelor of Visual Arts (Sculpture)']
  }, {
    letter: 'C',
    names: ['Certificate in Welding Technology', 'Craft Course in Cookery', 'Craft Course in Food & Beverage Service',
      'Craft Course in Hotel Management & Catering Technology', 'Craftmanship Course in Bakery & Confectionary']
  }, {
    letter: 'D',
    names: ['Diploma in Agriculture', 'Diploma in Business Journalism and Corporate Communication',
      'Diploma in Civil & Environmental Engineering', 'Diploma in Dance', 'Diploma in Early Childhood Education',
      'Diploma in Electrical Engineering', 'Diploma in Electronics Engineering', 'Diploma in Fashion and Textile Designing',
      'Diploma in Health-Care and Hospital Management', 'Diploma in Interior Design and Decoration',
      'Diploma in Labour Laws & Practice', 'Diploma in Mechanical Engineering', 'Diploma in Music', 'Diploma in Pharmacy',
      'Diploma in School Management', 'Diploma in Taxation Law', 'Diploma in Taxation Laws & Practice', 'Diploma in Technical Chemistry',
      'Diploma in Textile Manufactures', 'Doctor of Medicine\tMateria Medica', 'Doctor of Medicine Anaesthesia',
      'Doctor of Medicine Anatomy', 'Doctor of Medicine Ayurveda Kayachikitsa',
      'Doctor of Medicine Ayurveda Kriya Sharir', 'Doctor of Medicine Biochemistry',
      'Doctor of Medicine Community Medicine', 'Doctor of Medicine Dermatology', 'Doctor of Medicine Forensic Medicine',
      'Doctor of Medicine General Medicine', 'Doctor of Medicine Homeopathic Philosophy', 'Doctor of Medicine Homeopathy',
      'Doctor of Medicine Medicine', 'Doctor of Medicine Microbiology', 'Doctor of Medicine Obstetrics & Gynecology',
      'Doctor of Medicine Orthopaedics', 'Doctor of Medicine Otorhinolaryngology and Head & Neck Surgery',
      'Doctor of Medicine Paediatrics', 'Doctor of Medicine Pathology', 'Doctor of Medicine Pharmacology',
      'Doctor of Medicine Physiology', 'Doctor of Medicine Psychiatry', 'Doctor of Medicine Pulmonary Medicine',
      'Doctor of Medicine Radio-Diagnosis', 'Doctor of Medicine Radio-Therapy', 'Doctor of Medicine Radiology',
      'Doctor of Medicine Repertory', 'Doctor of Medicine Tuberculosis & Chest diseases', 'Doctor of Medicine Unani Moalejat',
      'Doctor of Philosophy Agricultural Process & Food Engineering', 'Doctor of Philosophy Banking & Finance',
      'Doctor of Philosophy Biochemistry', 'Doctor of Philosophy Biology', 'Doctor of Philosophy Biomedical Sciences',
      'Doctor of Philosophy Chemistry', 'Doctor of Philosophy Education', 'Doctor of Philosophy Farm Machinery & Power',
      'Doctor of Philosophy Gujarati', 'Doctor of Philosophy Hindi', 'Doctor of Philosophy in Forest Ecology &  Environment',
      'Doctor of Philosophy in Forest Management', 'Doctor of Philosophy Inorganic Chemistry', 'Doctor of Philosophy Kannada',
      'Doctor of Philosophy Law', 'Doctor of Philosophy Management Studies', 'Doctor of Philosophy Marathi',
      'Doctor of Philosophy Marine Biotechnology', 'Doctor of Philosophy Maritime Management',
      'Doctor of Philosophy Mechanical Engineering', 'Doctor of Philosophy Medical Biochemistry',
      'Doctor of Philosophy Medical Pharmacology', 'Doctor of Philosophy Microbiology', 'Doctor of Philosophy Nursing',
      'Doctor of Philosophy Organic Chemistry', 'Doctor of Philosophy Petroleum Engineering',
      'Doctor of Philosophy Pharmaceutical Analysis', 'Doctor of Philosophy Pharmaceutical Chemistry',
      'Doctor of Philosophy Pharmaceutics', 'Doctor of Philosophy Pharmacognosy', 'Doctor of Philosophy Pharmacology',
      'Doctor of Philosophy Pharmacy', 'Doctor of Philosophy Philosophy', 'Doctor of Philosophy Physiology',
      'Doctor of Philosophy Pulmonary Medicne', 'Doctor of Philosophy Social Work', 'Doctor of Philosophy Soil & Water Engineering',
      'Doctor of Philosophy Special Education', 'Doctor of Philosophy Zoology', 'Doctorate in Agriculture',
      'Doctorate in Agriculture Engineering', 'Doctorate in Fisheries', 'Doctorate in Microbiology',
      'Doctorate in Veterinary Science and Animal Husbandary', 'Doctrate in Medicine Pulmonary Medicine']
  }, {
    letter: 'E',
    names: ['Entrepreneurial Master of Business Administration']
  }, {
    letter: 'F',
    names: ['Fellow Programme in Management']
  }, {
    letter: 'I',
    names: ['Integrated Bachelor of Arts and Bachelor of Law', 'Integrated Master of Business Administration',
      'Integrated Master of Philosophy and Doctor of Philosophy English',
      'Integrated Master of Philosophy and Doctor of Philosophy Management',
      'Integrated Master of Tourism Administration', 'Integrated Masters in Life Science']
  }, {
    letter: 'M',
    names: ['Master of Agricultural Business Management', 'Master of Architecture (By Research)', 'Master of Architecture (General)',
      'Master of Architecture Architectural and Urban Conservation', 'Master of Architecture Construction Management',
      'Master of Architecture Environmental Architecture', 'Master of Architecture Real Estate Development',
      'Master of Architecture Urban and Regional Planning', 'Master of Architecture Urban Design',
      'Master of Arts (Diplomacy, Law & Business)', 'Master of Arts Ancient History & Archaeology',
      'Master of Arts Arabic', 'Master of Arts Communication & Media Studies', 'Master of Arts Communication and Journalism',
      'Master of Arts Convergent Journalism', 'Master of Arts Disability Communication and Deaf Studies', 'Master of Arts Economics',
      'Master of Arts Education', 'Master of Arts English', 'Master of Arts English (English Language Training)',
      'Master of Arts Geography', 'Master of Arts Gujarati', 'Master of Arts Hindi', 'Master of Arts History',
      'Master of Arts Mahayana Buddhist Studies', 'Master of Arts Mathematics', 'Master of Arts Music', 'Master of Arts Persian',
      'Master of Arts Philosophy', 'Master of Arts Political Science', 'Master of Arts Psychology',
      'Master of Arts Public Administration', 'Master of Arts Public Policy', 'Master of Arts Public Relations',
      'Master of Arts Punjabi', 'Master of Arts Rural Development', 'Master of Arts Sanskrit', 'Master of Arts Sociology',
      'Master of Arts Telugu', 'Master of Arts Tourism Management', 'Master of Arts Urdu', 'Master of Business Administration',
      'Master of Business Administration (Business Economics)', 'Master of Business Administration Hospital Administration',
      'Master of Business Administration Hospitality Management', 'Master of Business Administration Human Resource Management',
      'Master of Business Administration Insurance & Banking', 'Master of Business Administration International Business',
      'Master of Business Administration Tourism and Travel Management', 'Master of Business Administration Tourism Management',
      'Master of Business Application Agriculture Management', 'Master of Business Management (Marine Human Resource Management)',
      'Master of Business Management (Shipping & Logistics Management)', 'Master of Business Management (Shipping Finance)',
      'Master of Commerce (Accounting & Financial Management)', 'Master of Commerce (General)',
      'Master of Commerce (Human Resource Management)', 'Master of Commerce (International Banking & Accounting)',
      'Master of Commerce Accontancy', 'Master of Commerce Accounting and Auditing', 'Master of Commerce Advance Accounting',
      'Master of Commerce Banking and Finance', 'Master of Commerce Business Finance', 'Master of Commerce Industrial Economics',
      'Master of Commerce Management', 'Master of Computer Application', 'Master of Education', 'Master of Education Hearing Impairment',
      'Master of Engineering Communication Systems', 'Master of Engineering Computer Aided Design / Computer Aided Machining',
      'Master of Engineering Computer Engineering', 'Master of Engineering Electrical Engineering',
      'Master of Engineering Electronics & Telecommunication', 'Master of Engineering Electronics Engineering',
      'Master of Engineering Information Technology (Information Security)', 'Master of Engineering Instrumentation & Control',
      'Master of Engineering Mechanical Engineering', 'Master of Engineering Mechanical Engineering (CAD / CAM)',
      'Master of Engineering Mechanical Engineering (Energy Engineering)', 'Master of Engineering Power Electronics & Drives',
      'Master of Engineering VLSI Design', 'Master of Financial Management', 'Master of Fine Art Applied Art',
      'Master of Fine Art Painting', 'Master of Fine Art Print Making', 'Master of Fine Art Sclupture',
      'Master of Fine Art Visual Communication', 'Master of Fine Arts Illustration', 'Master of Fine Arts Typography',
      'Master of Human Resource Development', 'Master of Human Resource Management', 'Master of Information Management',
      'Master of Labour Welfare', 'Master of Laws', 'Master of Library Science', 'Master of Management Studies',
      'Master of Marketing Management', 'Master of Occupational Therapy', 'Master of Optometry', 'Master of Performing Arts (Dance)',
      'Master of Pharmacy', 'Master of Pharmacy  Pharmaceutical  Analysis', 'Master of Pharmacy Clinical Research',
      'Master of Pharmacy Herbal Drug Technology', 'Master of Pharmacy Hospital Pharmacy', 'Master of Pharmacy Pharmaceutical Chemistry',
      'Master of Pharmacy Pharmaceutical Management', 'Master of Pharmacy Pharmaceutics', 'Master of Pharmacy Pharmacognosy',
      'Master of Pharmacy Pharmacology', 'Master of Pharmacy Quality Assurance', 'Master of Philosophy (Natural Resource Mangement)',
      'Master of Philosophy Biomedical Sciences', 'Master of Philosophy Marine Biotechnology', 'Master of Philosophy Marine Microbiology',
      'Master of Philosophy Nursing', 'Master of Physical Education', 'Master of Physiotherapy', 'Master of Science (Horticulture)',
      'Master of Science (Medical Imaging Technology) Radiology', 'Master of Science (Post Harvest Management)',
      'Master of Science Agriculture', 'Master of Science Analytical Chemistry', 'Master of Science Analytical Chemistry (Research)',
      'Master of Science Anatomy', 'Master of Science and Doctor of Philosophy Biomedical Sciences', 'Master of Science Anthropology',
      'Master of Science Applied Genetics', 'Master of Science Applied Mathematics', 'Master of Science Aquaculture',
      'Master of Science Biochemistry', 'Master of Science Biochemistry', 'Master of Science Bioinformatics',
      'Master of Science Biomedical Sciences', 'Master of Science Biotechnology', 'Master of Science Botany',
      'Master of Science Chemistry', 'Master of Science Chemistry (Research)', 'Master of Science Computer Science',
      'Master of Science Defence Science', 'Master of Science Earth Science', 'Master of Science Electronics',
      'Master of Science Electronics & Communication', 'Master of Science Electronics & Instrumentation Technology',
      'Master of Science Environment Science Technology', 'Master of Science Environmental Sciences',
      'Master of Science Fabric & Apparel Science', 'Master of Science Fisheries', 'Master of Science Foods & Nutrition',
      'Master of Science Forensic Science', 'Master of Science Forestry', 'Master of Science Genetics', 'Master of Science Geology',
      'Master of Science Home Science', 'Master of Science Home Science (Family Resource Management)',
      'Master of Science Home Science (Food Biotechnology)', 'Master of Science Home Science (Food Nutrition and Dietetics)',
      'Master of Science Home Science (Food Processing and Preservation)', 'Master of Science Home Science (Human Development)',
      'Master of Science Home Science (Sports Nutrition)', 'Master of Science Home Science (Textile & Clothing)',
      'Master of Science Home Science (Textile and Fashion Technology)', 'Master of Science Hotel & Tourism Studies',
      'Master of Science Industrial BioTechnology', 'Master of Science Industrial Polymer Chemistry', 'Master of Science Informatics',
      'Master of Science Information Technology', 'Master of Science Inorganic Chemistry',
      'Master of Science Inorganic Chemistry (Research)', 'Master of Science Instrumentation',
      'Master of Science Marine Biotechnology', 'Master of Science Material Science & Technology',
      'Master of Science Mathematics', 'Master of Science Medical Laboratory Technology', 'Master of Science Microbiology',
      'Master of Science Microbiology', 'Master of Science Microbiology (Research)', 'Master of Science Nano-Biotechnology',
      'Master of Science Nano-Technology', 'Master of Science NanoScience & NanoTechnology', 'Master of Science Nursing',
      'Master of Science Oceanography Fisheries and Aquaculture', 'Master of Science Oils, Fats & Waxes',
      'Master of Science Operational Research', 'Master of Science Organic Chemistry', 'Master of Science Organic Chemistry (Research)',
      'Master of Science Pharmaceutical Chemistry', 'Master of Science Pharmacology',
      'Master of Science Physical Chemistry', 'Master of Science Physics',
      'Master of Science Physics (Electronics)', 'Master of Science Physics (Material Science)',
      'Master of Science Physiology', 'Master of Science Polymer Science & Technology',
      'Master of Science Renewable Energy (Energy Management)', 'Master of Science Renewable Energy (Environment Modeling)',
      'Master of Science Renewable Energy (System Technology)', 'Master of Science Statistics',
      'Master of Science Statistics (Quality & Productivity Management)',
      'Master of Science Statistics (Quality Reliability & Operations Research)', 'Master of Science Surface Coating Technology',
      'Master of Science Taxonomy', 'Master of Science Zoology', 'Master of Science Zoology (Research)', 'Master of Social Work',
      'Master of Surgery Anatomy', 'Master of Surgery Ear Nose & Throat', 'Master of Surgery General Surgery',
      'Master of Surgery Ophthalmology', 'Master of Surgery Orthopaedics', 'Master of Surgery Otorhinolaryngology',
      'Master of Surgery Surgery', 'Master of Technology Agricultural Process & Food Engineering',
      'Master of Technology Agriculture Engineering', 'Master of Technology Biotechnology',
      'Master of Technology Computer Engineering (Information Systems)', 'Master of Technology Computer Science & Technology',
      'Master of Technology Electronics & Communication Engineering',
      'Master of Technology Electronics & Communication Engineering ( Signal Processing)',
      'Master of Technology Energy Management', 'Master of Technology in Farm Machinery & Power',
      'Master of Technology Information & Communication Technology',
      'Master of Technology Instrumentation & Control Engineering (Process Control)',
      'Master of Technology Manufacturing & Automation', 'Master of Technology Marine Engineering Management',
      'Master of Technology Petroleum Technology', 'Master of Technology Plastics Technology',
      'Master of Technology Soil & Water Engineering', 'Master of Tourism Administration',
      'Master of Tourism and Travel Management', 'Master of Urban Planning', 'Master of Veterinary Science',
      'Masters in Heritage Management', 'Masters in Life Sciences']
  }, {
    letter: 'P',
    names: ['Post Diploma in Interior Designing & Decoration', 'Post Graduate Diploma Anaesthesia',
      'Post Graduate Diploma in Advertising & Marketing Communication', 'Post Graduate Diploma In Advertising & Media',
      'Post Graduate Diploma in Ambedkar Studies', 'Post Graduate Diploma in Business Administration',
      'Post Graduate Diploma in Business Management', 'Post Graduate Diploma in Child Health',
      'Post Graduate Diploma in Computer Applications', 'Post Graduate Diploma in Corporate Communication & Event Management',
      'Post Graduate Diploma in Criminal Law', 'Post Graduate Diploma in Defence Materials',
      'Post Graduate Diploma in Dermatology & Venerology', 'Post Graduate Diploma in Dietetics and Public Health Nutrition',
      'Post Graduate Diploma in Digital and Cyber Forensics and related Laws',
      'Post Graduate Diploma in Forensic Science and related Laws', 'Post Graduate Diploma in Forestry Management',
      'Post Graduate Diploma in Geriatric Medicine', 'Post Graduate Diploma in Global Business Operations',
      'Post Graduate Diploma in Health and Social Gerontology', 'Post Graduate Diploma in Horticulture and Landscape Gardening',
      'Post Graduate Diploma in Intellectual Property Rights', 'Post Graduate Diploma in International Marketing',
      'Post Graduate Diploma in Labour Law and Labour Welfare', 'Post Graduate Diploma in Management',
      'Post Graduate Diploma in Management of Education', 'Post Graduate Diploma in Maternal and Child Health',
      'Post Graduate Diploma in Media & Disability Communication', 'Post Graduate Diploma in Medical Laboratory Technology',
      'Post Graduate Diploma in Medical Radio Diagnosis', 'Post Graduate Diploma in Obstetrics and Gynaecology',
      'Post Graduate Diploma in Ophthalmology', 'Post Graduate Diploma in Orthopaedics',
      'Post Graduate Diploma in Otorhinolaryngology', 'Post Graduate Diploma in Pathology',
      'Post Graduate Diploma in Social Media & Web Journalism', 'Post Graduate Diploma in Taxation Laws',
      'Post Graduate Diploma in Television & Radio Journalism / Production', 'Post Graduate Diploma in Tuberculosis & Chest Disease',
      'Post Graduate Diploma in Yoga for Human Excellence',
      'Postgraduate Diploma in Clinical Studies, Data Management & Medical Writing',
      'Preparatory course for Doctor of Philosophy Biotechnology']
  }, {
    letter: 'V',
    names: ['Volunteering for a Better World']
  }, {
    letter: 'X',
    names: ['XI Arts', 'XI Commerce', 'XI Science', 'XII Arts', 'XII Commerce', 'XII Science']
  }];

  constructor(private dataService: DataStorageService) {
  }

  ngOnInit() {
    let link = new FormArray([]);
    this.form = new FormGroup({
      'postName': new FormControl(null, Validators.required),
      'postDate': new FormControl(null, Validators.required),
      'postUpdate': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'qualification': new FormControl(null, Validators.required),
      'impDates': new FormGroup({
        'applicationBegin': new FormControl(null, Validators.required),
        'lastDate': new FormControl(null, Validators.required),
        'lastDateExamFees': new FormControl(null, Validators.required),
        'answerKeyDate': new FormControl(null),
        'resultDeclareDate': new FormControl(null)
      }),
      'fees': new FormGroup({
        'general': new FormControl(null, Validators.required),
        'obc': new FormControl(null, Validators.required),
        'sc': new FormControl(null, Validators.required),
        'description': new FormControl(null),
      }),
      'vacancyDetails': new FormControl(null, Validators.required),
      'links': link,
    });
    this.stateGroupOptions = this.form.get('qualification').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }
  onAddLink() {
    (<FormArray>this.form.get('links')).push(
      new FormGroup({
        'linkTitle': new FormControl(null, Validators.required),
        'linkRef': new FormControl(null, Validators.required)
      })
    );
  }
  onDeleteLink(i: number) {
    (<FormArray>this.form.get('links')).removeAt(i);
  }

  onSubmit() {
    if (this.form.valid) {
      this.dataService.storeForm(this.form.value).subscribe((respose: Response) => {
        console.log(respose);
      });
      this.form.reset();
      
    }
  }

  private _filterGroup(value: string): Qualification[] {
    if (value) {
      return this.qualificationGroup
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.qualificationGroup;
  }



  onGet() {
    // this.dataService.getForm().subscribe((er: FormModel[] ) => console.log(er));
  }


}
