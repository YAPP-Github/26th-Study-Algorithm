/*
날짜 포멧 DATE_FORMAT(날짜컬럼, '포멧형식') 
- 포멧형식 : '
%Y' : 년(4자리)
%y' : 년(2자리)
'%m' : 월(2자리)
'%d' : 일(2자리)
%H' : 시간(24시간)
'%h' : 시간(12시간)
'%i' : 분
'%s' : 초
*/
SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS'
ORDER BY HIRE_YMD DESC, DR_NAME ASC