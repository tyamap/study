using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// キーボード入力を行なってコンソールにログを出力する
// - 方向キーの入力
// - ボタンの入力
public class Sample : MonoBehaviour
{
    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        Debug.Log(x);
    }
}
