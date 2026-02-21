-- 문자열 이어서 출력: CONCAT() 함수 사용
-- ROW_NUMBER 함수 사용 불가하면, 서브쿼리로 최대 조회수 구하기
SELECT CONCAT('/home/grep/src/', ugf.BOARD_ID, '/', ugf.FILE_ID, ugf.FILE_NAME ,ugf.FILE_EXT) AS FILE_PATH
FROM 
    USED_GOODS_BOARD ugb JOIN 
    USED_GOODS_FILE ugf ON ugb.BOARD_ID = ugf.BOARD_ID
WHERE ugb.VIEWS = (SELECT MAX(VIEWS) FROM USED_GOODS_BOARD)
ORDER BY ugf.FILE_ID DESC
