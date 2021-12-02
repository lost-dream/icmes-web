export interface BaseModel {
  /** 员工出生日期 */
  birthDate: number;
  /** 员工类型 */
  category: string;
  /** 员工电子邮件地址 */
  email: string;
  /** 员工性别 */
  gender: string;
  /** 员工毕业学校 */
  graduateSchool: string;
  /** 员工毕业时间 */
  graduationDate: number;
  /** 员工最高学位 */
  highDegree: string;
  /** 员工最高学历 */
  highEducation: string;
  /** 员工身份证号码 */
  identityCard: string;
  /** 员工入职日期 */
  joinDate: number;
  /** 员工手机号码 */
  mobilePhone: string;
  /** 员工姓名 */
  name: string;
  /** 员工办公室电话 */
  officePhone: string;
  /** 员工办公室电话区号 */
  officePhoneArea: string;
  /** 员工办公室电话分机号 */
  officePhoneExt: string;
  /** 员工所属组织机构ID */
  organizationId: number;
  /** 员工职业资格 */
  qualification: string;
  /** 员工的专用设备号 */
  specialDevice: string;
  /** 员工所学专业 */
  specialty: string;
  /** 员工工种 */
  workType: string;
}

export interface EmployeeModel extends BaseModel {
  /** 员工头像路径 */
  avatar: string;
  /** 员工工号 */
  code: string;
  /** 员工信息创建时间 */
  createTime: number;
  /** 组织机构全名 */
  fullName: string;
  /** 组织机构全名关联的组织机构标识 */
  fullOrgIds: string;
  /** 员工标识 */
  id: number;
  /** 员工所属组织机构编码 */
  organizationCode: string;
  /** 员工所属组织机构ID */
  organizationId: number;
  /** 员工所属组织机构名称 */
  organizationName: string;
  /** 员工信息更新时间 */
  updateTime: number;
  /** 用于高并发的数据版本控制 */
  versionTag: string;
}

export interface EditEmployeeInfoParam extends BaseModel {
  /** 用于高并发的数据版本控制 */
  versionTag: string;
}
export interface EditEmployeeInfoResultModel {
  code: number;
}
