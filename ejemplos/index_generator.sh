repo_path=$(git rev-parse --show-toplevel)

ejemplos_path=`echo ${repo_path}/ejemplos/`;

if [ -c "$ejemplos_path/index.md" ]
then
  rm $ejemplos_path/index.md
fi

echo '# Lista de ejemplos disponibles' > $ejemplos_path/index.txt;
echo '' >> $ejemplos_path/index.txt;

for file in `find $repo_path/ejemplos/ -iregex ".*\.html$" | sort `;
do
		f=`echo ${file} | sed "s|${ejemplos_path}||i"`;
		echo " - [\`${f}\`](./$f)" >> $ejemplos_path/index.txt;
done;

mv $ejemplos_path/index.txt $ejemplos_path/index.md;
